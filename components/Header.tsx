import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/donate", label: "Donate" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/jayhawk-logo.png"
            alt="KU Jayhawk"
            width={169}
            height={150}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>
            University of Kansas Debate Alumni
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
