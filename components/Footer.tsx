import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <p className={styles.title}>KU Debate Alumni Network</p>
          <p className={styles.tagline}>
            Connecting generations of Jayhawk debaters.
          </p>
        </div>
        <div className={styles.contact}>
          <p className={styles.contactLabel}>Contact</p>
          <p className={styles.contactText}>
            Questions about the reunion? Email{" "}
            <a href="mailto:alumni@kudebate.org">alumni@kudebate.org</a>
          </p>
        </div>
        <p className={styles.copyright}>
          &copy; {year} KU Debate Alumni Network. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
