import Image from "next/image";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Run It Back" },
  { href: "/rsvp", label: "RSVP" },
  { href: "/donate", label: "Support KU Debate" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/ku-debate-alumni-logo.png"
            alt="KU Debate Alumni"
            width={1024}
            height={682}
            className={styles.logoImage}
            priority
          />
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
