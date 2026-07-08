import Button from "@/components/Button";
import HeroSlideshow from "@/components/HeroSlideshow";
import ScheduleSection from "@/components/ScheduleSection";
import { galleryImages } from "@/lib/gallery-images";
import { reunionSchedule } from "@/lib/schedule";

export default function RunItBackPage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="hero__eyebrow">2026 Reunion</p>
            <h1 className="hero__title">Run It Back</h1>
            <p className="hero__dates">August 28–30, 2026 · Lawrence, Kansas</p>
            <p className="hero__description">
              Reconnect with fellow Jayhawk debaters, celebrate our shared
              history, and support the next generation of Kansas Debate.
            </p>
            <div className="hero__actions">
              <Button href="/rsvp" variant="primary">
                RSVP for Run It Back
              </Button>
              <Button href="#schedule" variant="outline">
                View Schedule
              </Button>
              <Button href="/donate" variant="outline">
                Support KU Debate
              </Button>
              <Button href="#lodging" variant="outline">
                Lodging
              </Button>
            </div>
          </div>
          <HeroSlideshow images={galleryImages} />
        </div>
      </section>

      <section id="schedule" className="section">
        <div className="container">
          <h2 className="section__title">Schedule of Events</h2>
          <p className="section__subtitle">
            Run It Back 2026 — initial schedule. Some locations and details are
            still being finalized; RSVP to stay updated.
          </p>
          <ScheduleSection schedule={reunionSchedule} />
        </div>
      </section>

      <section id="lodging" className="section section--alt">
        <div className="container">
          <h2 className="section__title">Lodging Details</h2>
          <p className="section__subtitle">
            Book early for reunion weekend. We have a room block at The Oread
            Lawrence and are working on additional hotel blocks.
          </p>

          <div className="lodging-grid">
            <article className="lodging-card lodging-card--featured">
              <p className="lodging-card__label">Reunion Room Block</p>
              <h3 className="lodging-card__title">The Oread Lawrence</h3>
              <p className="lodging-card__rate">$189 per night</p>
              <p className="lodging-card__text">
                Call <a href="tel:17858431200">(785) 843-1200</a> and reference
                “KU Debate” when booking.
              </p>
            </article>

            <article className="lodging-card">
              <h3 className="lodging-card__title">Tru by Hilton Lawrence</h3>
              <p className="lodging-card__rate">$110 on a recent search</p>
              <p className="lodging-card__text">
                510 Wakarusa Drive · <a href="tel:17853710600">(785) 371-0600</a>
              </p>
            </article>

            <article className="lodging-card">
              <h3 className="lodging-card__title">StoneHill Hotel Lawrence</h3>
              <p className="lodging-card__rate">$113 on a recent search</p>
              <p className="lodging-card__text">
                6101 Rock Chalk Drive ·{" "}
                <a href="tel:17853309520">(785) 330-9520</a>
              </p>
            </article>

            <article className="lodging-card">
              <h3 className="lodging-card__title">
                DoubleTree by Hilton Hotel Lawrence
              </h3>
              <p className="lodging-card__rate">$100 on a recent search</p>
              <p className="lodging-card__text">
                200 McDonald Drive · <a href="tel:17858417077">(785) 841-7077</a>
              </p>
              <p className="lodging-card__note">
                Formerly the Holidome; made famous at World Cup by the Algerian
                Team’s selection of the DoubleTree. Pet friendly with a swimming
                pool.
              </p>
            </article>
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
                RSVP for Run It Back
              </Button>
              <Button href="/donate" variant="secondary">
                Support KU Debate
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
