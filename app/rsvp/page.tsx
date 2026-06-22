"use client";

import { useState } from "react";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

export default function RsvpPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">2026 Reunion</p>
          <h1 className="hero__title">RSVP</h1>
          <p className="hero__description">
            Let us know you are coming to the KU Debate Alumni Reunion,
            August 28–30, 2026 in Lawrence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container donate-layout">
          <div>
            <h2 className="section__title">We Hope to See You There</h2>
            <p className="section__subtitle">
              Fill out the form to register your interest. A full schedule,
              lodging details, and event locations will be shared closer to the
              reunion date.
            </p>
            <PhotoPlaceholder
              label="Reunion welcome reception"
              aspectRatio="landscape"
            />
          </div>

          <div className="donate-panel">
            <h2 className="donate-panel__title">Reunion Registration</h2>
            <p className="donate-panel__text">
              August 28–30, 2026 · Lawrence, Kansas
            </p>

            {/* Placeholder form — wire to backend or form provider when ready */}
            {submitted ? (
              <div className="rsvp-success">
                <p className="rsvp-success__title">Thank you!</p>
                <p className="rsvp-success__text">
                  Your RSVP has been recorded. We will send updates as reunion
                  details are finalized.
                </p>
              </div>
            ) : (
              <form className="rsvp-form" onSubmit={handleSubmit}>
                <label className="form-field">
                  <span className="form-field__label">Full name</span>
                  <input
                    className="form-field__input"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                  />
                </label>

                <label className="form-field">
                  <span className="form-field__label">Email</span>
                  <input
                    className="form-field__input"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                  />
                </label>

                <label className="form-field">
                  <span className="form-field__label">Graduation year (optional)</span>
                  <input
                    className="form-field__input"
                    type="text"
                    name="graduationYear"
                    inputMode="numeric"
                    placeholder="e.g. 2015"
                  />
                </label>

                <label className="form-field">
                  <span className="form-field__label">Number of guests</span>
                  <select className="form-field__input" name="guests" defaultValue="1">
                    <option value="1">Just me</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </label>

                <label className="form-field">
                  <span className="form-field__label">Notes (optional)</span>
                  <textarea
                    className="form-field__input form-field__textarea"
                    name="notes"
                    rows={3}
                    placeholder="Dietary restrictions, accessibility needs, etc."
                  />
                </label>

                <Button type="submit" variant="primary">
                  Submit RSVP
                </Button>

                <p className="donate-note">
                  This is a placeholder form. Responses are not yet stored —
                  backend integration coming soon.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
