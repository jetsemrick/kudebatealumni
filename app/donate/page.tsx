import Button from "@/components/Button";
import {
  developmentContact,
  endowmentFunds,
  KU_ENDOWMENT_ONLINE_GIVING_URL,
  KU_ENDOWMENT_PHONE,
} from "@/lib/endowment-funds";

export default function SupportPage() {
  const onlineFunds = endowmentFunds.filter((fund) => fund.onlineGiving);

  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__eyebrow">Give to KU Debate</p>
          <h1 className="hero__title">Support KU Debate</h1>
          <p className="hero__description">
            The proud winning tradition and educational experience of
            participating in KU Debate is a direct result of generous private
            support from alumni, coaches, and friends.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container support-content">
          <div className="support-block">
            <h2 className="section__title">Why Your Gift Matters</h2>
            <p>
              Since 1978, KU Debate has been supported in part through private
              donations made to the KU Endowment Association for KU Debate.
              Private donations permit KU Debate to travel nationally and
              compete with students from the nation&apos;s top colleges and
              universities.
            </p>
            <p>
              We are working toward a fully endowed program — able to support
              travel, research, students through scholarships, and coaches
              through graduate student scholarships. Your contribution helps KU
              Debate expand its reach to more students and more competitive
              opportunities.
            </p>
          </div>

          <div className="support-block">
            <h2 className="section__title">KU Debate Endowment Accounts</h2>
            <p className="section__subtitle">
              Tax-deductible contributions can be made to any of the accounts
              below. When giving, be sure to indicate the specific fund number
              so your gift supports the account you intend.
            </p>
            <ul className="fund-list">
              {endowmentFunds.map((fund) => (
                <li key={fund.accountNumber} className="fund-list__item">
                  <span className="fund-list__number">{fund.accountNumber}</span>
                  <span className="fund-list__name">{fund.name}</span>
                  {fund.onlineGiving && (
                    <span className="fund-list__badge">Online giving available</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="support-block">
            <h2 className="section__title">How to Give</h2>

            <article className="giving-method">
              <h3 className="giving-method__title">Give Online</h3>
              <p>
                KU Endowment accepts online gifts by Visa, Mastercard,
                American Express, and Discover. Only two KU Debate funds are
                currently available through the online giving form — you will
                need to search for and select the fund by account number:
              </p>
              <ul>
                {onlineFunds.map((fund) => (
                  <li key={fund.accountNumber}>
                    <strong>{fund.accountNumber}</strong> — {fund.name}
                  </li>
                ))}
              </ul>
              <p>
                For all other accounts, please give by check or phone and
                specify the fund number.
              </p>
              <Button
                href={KU_ENDOWMENT_ONLINE_GIVING_URL}
                variant="primary"
                external
              >
                Give Through KU Endowment
              </Button>
            </article>

            <article className="giving-method">
              <h3 className="giving-method__title">Give by Check</h3>
              <p>
                Send checks payable to KU Endowment Association. Include the
                specific KU Debate fund number on your check.
              </p>
              <address className="contact-card">
                <p>{developmentContact.name}</p>
                <p>{developmentContact.title}</p>
                <p>{developmentContact.organization}</p>
              </address>
            </article>

            <article className="giving-method">
              <h3 className="giving-method__title">Give by Credit Card (Phone)</h3>
              <p>
                Call KU Endowment at{" "}
                <a href={`tel:${KU_ENDOWMENT_PHONE}`}>{KU_ENDOWMENT_PHONE}</a>{" "}
                and provide your card type, contribution amount, name on the
                card, and the KU Debate fund number you wish to support.
              </p>
            </article>

            <article className="giving-method">
              <h3 className="giving-method__title">Gifts of Stock</h3>
              <p>
                By giving appreciated securities held long-term (one year or
                more), you can deduct the full market value of your stock,
                saving income taxes and capital gains taxes on the appreciated
                amount. Contact KU Endowment for transfer instructions and
                include the fund number with your gift.
              </p>
            </article>

            <article className="giving-method">
              <h3 className="giving-method__title">Establish an Endowed Fund</h3>
              <p>
                KU Endowment makes it easy to establish an endowed fund
                supporting KU Debate. A pledge and initial check are sufficient
                to begin establishing a fund in honor or in memory of an
                individual, or to support a particular program objective.
              </p>
              <ul>
                <li>
                  <strong>Endowed Award</strong> — $10,000 creates a permanently
                  endowed award.
                </li>
                <li>
                  <strong>Endowed Scholarship Fund</strong> — $30,000
                  establishes a permanently endowed scholarship fund.
                </li>
              </ul>
            </article>

            <article className="giving-method">
              <h3 className="giving-method__title">Estate Planning</h3>
              <p>
                KU Endowment can assist with planning a testamentary gift to
                support KU Debate. Recommended bequest language:
              </p>
              <blockquote className="bequest-language">
                I (bequeath or devise) to THE KANSAS UNIVERSITY ENDOWMENT
                ASSOCIATION (dollar amount or percentage of residuary estate) to
                be used by the University of Kansas for (KU Debate, scholarships
                to support KU Debate, or other defined purpose).
              </blockquote>
            </article>
          </div>

          <div className="support-block">
            <h2 className="section__title">Questions About Giving?</h2>
            <div className="contact-card">
              <p>
                <strong>{developmentContact.name}</strong>
              </p>
              <p>{developmentContact.title}</p>
              <p>{developmentContact.organization}</p>
              <p>
                Direct:{" "}
                <a href={`tel:${developmentContact.directLine.replace(/-/g, "")}`}>
                  {developmentContact.directLine}
                </a>
              </p>
              <p>
                Toll free:{" "}
                <a href="tel:8004444201">{developmentContact.tollFree}</a>
              </p>
              <p>
                Cell:{" "}
                <a href={`tel:${developmentContact.cell.replace(/-/g, "")}`}>
                  {developmentContact.cell}
                </a>
              </p>
            </div>
            <p className="donate-note">
              More information is also available on the{" "}
              <a
                href="https://debate.ku.edu/supporting-ku-debate"
                target="_blank"
                rel="noopener noreferrer"
              >
                KU Debate supporting page
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
