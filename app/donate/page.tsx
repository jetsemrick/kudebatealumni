"use client";

import { useState } from "react";
import Button from "@/components/Button";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";

const PRESET_AMOUNTS = [25, 50, 100, 250] as const;

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | "custom">(50);

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">Support KU Debate</p>
          <h1 className="hero__title">Make a Gift</h1>
          <p className="hero__description">
            Your generosity helps fund travel, scholarships, and resources for
            current Kansas Debate students.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container donate-layout">
          <div>
            <h2 className="section__title">Why Give?</h2>
            <p className="section__subtitle">
              Kansas Debate has produced generations of leaders. Alumni support
              ensures the program continues to compete at the highest level and
              provide opportunities for every student on the team.
            </p>
            <PhotoPlaceholder
              label="Impact photo — team at tournament"
              aspectRatio="landscape"
            />
          </div>

          <div className="donate-panel">
            <h2 className="donate-panel__title">Choose an Amount</h2>
            <p className="donate-panel__text">
              Select a suggested gift amount below. Payment processing will be
              available soon.
            </p>

            {/* Placeholder UI — wire to Stripe or KU Endowment when ready */}
            <div className="amount-grid" role="group" aria-label="Donation amount">
              {PRESET_AMOUNTS.map((amount) => (
                <button
                  key={amount}
                  type="button"
                  className={`amount-btn${selectedAmount === amount ? " amount-btn--selected" : ""}`}
                  onClick={() => setSelectedAmount(amount)}
                  aria-pressed={selectedAmount === amount}
                >
                  ${amount}
                </button>
              ))}
              <button
                type="button"
                className={`amount-btn${selectedAmount === "custom" ? " amount-btn--selected" : ""}`}
                onClick={() => setSelectedAmount("custom")}
                aria-pressed={selectedAmount === "custom"}
              >
                Custom
              </button>
            </div>

            <Button variant="primary" disabled>
              Donate
              {selectedAmount !== "custom"
                ? ` $${selectedAmount}`
                : ""}
            </Button>

            <p className="donate-note">
              Payment processing coming soon. This page is a placeholder for
              future integration with Stripe or KU Endowment.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
