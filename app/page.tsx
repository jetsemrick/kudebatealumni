import Button from "@/components/Button";
import HeroSlideshow from "@/components/HeroSlideshow";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { heroSlideshowImages } from "@/lib/slideshow-images";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="hero__eyebrow">2026 Reunion</p>
            <h1 className="hero__title">KU Debate Alumni Reunion</h1>
            <p className="hero__dates">August 28–30, 2026</p>
            <p className="hero__description">
              Reconnect with fellow Jayhawk debaters, celebrate our shared
              history, and support the next generation of Kansas Debate.
            </p>
            <div className="hero__actions">
              <Button href="/rsvp" variant="primary">
                RSVP for Reunion
              </Button>
              <Button href="#details" variant="outline">
                Reunion Details
              </Button>
              <Button href="/donate" variant="outline">
                Support the Team
              </Button>
            </div>
          </div>
          <HeroSlideshow images={heroSlideshowImages} />
        </div>
      </section>

      <section id="details" className="section">
        <div className="container">
          <h2 className="section__title">Reunion Details</h2>
          <p className="section__subtitle">
            Mark your calendar for a weekend of debate, reminiscing, and
            Jayhawk pride in Lawrence.
          </p>
          <div className="details-grid">
            <article className="detail-card">
              <p className="detail-card__label">When</p>
              <h3 className="detail-card__title">August 28–30, 2026</h3>
              <p className="detail-card__text">
                Friday evening welcome reception through Sunday brunch. Full
                schedule to be announced.
              </p>
            </article>
            <article className="detail-card">
              <p className="detail-card__label">Where</p>
              <h3 className="detail-card__title">Lawrence, Kansas</h3>
              <p className="detail-card__text">
                Events will be held on the University of Kansas campus and
                nearby venues. Specific locations coming soon.
              </p>
            </article>
            <article className="detail-card">
              <p className="detail-card__label">Lodging</p>
              <h3 className="detail-card__title">Hotel Block</h3>
              <p className="detail-card__text">
                A discounted hotel block will be available for reunion
                attendees. Booking details will be posted here.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section__title">Memories Through the Years</h2>
          <p className="section__subtitle">
            Photo gallery coming soon. Share your favorite KU Debate moments.
          </p>
          <div className="gallery-grid">
            <PhotoPlaceholder label="Team photo, circa 1990s" aspectRatio="square" />
            <PhotoPlaceholder label="National tournament celebration" aspectRatio="square" />
            <PhotoPlaceholder label="Alumni gathering" aspectRatio="square" />
            <PhotoPlaceholder label="Current team with alumni" aspectRatio="square" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="connect-box">
            <h2 className="connect-box__title">Stay Connected</h2>
            <p className="connect-box__text">
              Ready to join us in Lawrence? RSVP now and we will keep you
              updated as reunion details are finalized.
            </p>
            <div className="connect-box__actions">
              <Button href="/rsvp" variant="primary">
                RSVP for Reunion
              </Button>
              <Button href="/donate" variant="secondary">
                Make a Gift
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
