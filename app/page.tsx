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
