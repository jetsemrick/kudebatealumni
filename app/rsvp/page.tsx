"use client";

import { useState } from "react";
import Button from "@/components/Button";
import PhotoGallery from "@/components/PhotoGallery";
import { galleryImages } from "@/lib/gallery-images";
import { saturdayMorningActivities } from "@/lib/schedule";

const mealOptions = [
  {
    id: "friday-dinner",
    label: "Friday dinner",
    description: "Friday evening kickoff dinner.",
  },
  {
    id: "saturday-lunch",
    label: "Saturday lunch",
    description: "Saturday lunch and program at the Jayhawk Welcome Center.",
  },
  {
    id: "saturday-dinner",
    label: "Saturday dinner",
    description: "Saturday evening dinner.",
  },
];

export default function RsvpPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  function toggleActivity(id: string) {
    setSelectedActivities((current) =>
      current.includes(id)
        ? current.filter((activityId) => activityId !== id)
        : [...current, id],
    );
  }

  function toggleMeal(id: string) {
    setSelectedMeals((current) =>
      current.includes(id)
        ? current.filter((mealId) => mealId !== id)
        : [...current, id],
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      graduationYear: String(formData.get("graduationYear") ?? ""),
      guests: String(formData.get("guests") ?? "1"),
      saturdayActivities: selectedActivities,
      notes: String(formData.get("notes") ?? ""),
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          data?.error ?? "Failed to record your RSVP. Please try again.",
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to record your RSVP. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">Run It Back 2026</p>
          <h1 className="hero__title">RSVP</h1>
          <p className="hero__description">
            Let us know you are coming to Run It Back, August 28–30, 2026 in
            Lawrence.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container donate-layout">
          <div>
            <h2 className="section__title">We Hope to See You There</h2>
            <p className="section__subtitle">
              Fill out the form to register your interest. Indicate which meals
              and Saturday morning activities interest you so we can plan ahead.
            </p>
            <PhotoGallery images={galleryImages.slice(0, 4)} />
          </div>

          <div className="donate-panel">
            <h2 className="donate-panel__title">Run It Back Registration</h2>
            <p className="donate-panel__text">
              August 28–30, 2026 · Lawrence, Kansas
            </p>

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
                <div className="form-row">
                  <label className="form-field">
                    <span className="form-field__label">First name</span>
                    <input
                      className="form-field__input"
                      type="text"
                      name="firstName"
                      required
                      autoComplete="given-name"
                    />
                  </label>

                  <label className="form-field">
                    <span className="form-field__label">Last name</span>
                    <input
                      className="form-field__input"
                      type="text"
                      name="lastName"
                      required
                      autoComplete="family-name"
                    />
                  </label>
                </div>

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
                  <span className="form-field__label">
                    Graduation year (optional)
                  </span>
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
                  <select
                    className="form-field__input"
                    name="guests"
                    defaultValue="1"
                  >
                    <option value="1">Just me</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4+</option>
                  </select>
                </label>

                <fieldset className="form-fieldset">
                  <legend className="form-fieldset__legend">
                    Meals you plan to attend
                  </legend>
                  <p className="form-fieldset__hint">
                    Select each meal you expect to join so we can estimate
                    attendance.
                  </p>
                  <div className="checkbox-group">
                    {mealOptions.map((meal) => (
                      <label key={meal.id} className="checkbox-field">
                        <input
                          type="checkbox"
                          name="meals"
                          value={meal.id}
                          checked={selectedMeals.includes(meal.id)}
                          onChange={() => toggleMeal(meal.id)}
                        />
                        <span className="checkbox-field__content">
                          <span className="checkbox-field__label">
                            {meal.label}
                          </span>
                          <span className="checkbox-field__description">
                            {meal.description}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="form-fieldset">
                  <legend className="form-fieldset__legend">
                    Saturday morning activities (optional)
                  </legend>
                  <p className="form-fieldset__hint">
                    Select any activities you are interested in attending. The
                    Rare Books Tour has limited capacity.
                  </p>
                  <div className="checkbox-group">
                    {saturdayMorningActivities.map((activity) => (
                      <label key={activity.id} className="checkbox-field">
                        <input
                          type="checkbox"
                          name="saturdayActivities"
                          value={activity.id}
                          checked={selectedActivities.includes(activity.id)}
                          onChange={() => toggleActivity(activity.id)}
                        />
                        <span className="checkbox-field__content">
                          <span className="checkbox-field__label">
                            {activity.label}
                            {activity.rsvpRequired && (
                              <span className="checkbox-field__badge">
                                Limited capacity
                              </span>
                            )}
                          </span>
                          <span className="checkbox-field__description">
                            {activity.description}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="form-field">
                  <span className="form-field__label">Notes (optional)</span>
                  <textarea
                    className="form-field__input form-field__textarea"
                    name="notes"
                    rows={3}
                    placeholder="Dietary restrictions, accessibility needs, etc."
                  />
                </label>

                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit RSVP"}
                </Button>

                {submitError ? (
                  <p className="rsvp-error" role="alert">
                    {submitError}
                  </p>
                ) : null}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
