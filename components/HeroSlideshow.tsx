"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-images";
import styles from "./HeroSlideshow.module.css";

type HeroSlideshowProps = {
  images: GalleryImage[];
  intervalMs?: number;
};

export default function HeroSlideshow({
  images,
  intervalMs = 5000,
}: HeroSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex((index + images.length) % images.length);
    },
    [images.length],
  );

  const goNext = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((index) => (index + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  if (images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className={styles.slideshow} aria-roledescription="carousel">
      <div className={styles.frame}>
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`${styles.slide}${index === currentIndex ? ` ${styles.slideActive}` : ""}`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
              priority={index === 0}
            />
          </div>
        ))}

        {images.length > 1 && (
          <>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navPrev}`}
              onClick={goPrev}
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.navButton} ${styles.navNext}`}
              onClick={goNext}
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}
      </div>

      <p className={styles.caption}>{current.caption}</p>

      {images.length > 1 && (
        <div className={styles.dots} role="tablist" aria-label="Slide navigation">
          {images.map((image, index) => (
            <button
              key={image.src}
              type="button"
              role="tab"
              className={`${styles.dot}${index === currentIndex ? ` ${styles.dotActive}` : ""}`}
              aria-label={`Go to slide ${index + 1}: ${image.caption}`}
              aria-selected={index === currentIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
