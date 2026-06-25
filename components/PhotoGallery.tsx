import Image from "next/image";
import type { GalleryImage } from "@/lib/gallery-images";

type PhotoGalleryProps = {
  images: GalleryImage[];
};

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  return (
    <div className="gallery-grid">
      {images.map((image) => (
        <figure key={image.src} className="gallery-item">
          <div className="gallery-item__frame">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
              className="gallery-item__image"
            />
          </div>
          <figcaption className="gallery-item__caption">{image.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}
