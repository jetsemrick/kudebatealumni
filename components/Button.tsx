import Link from "next/link";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  disabled?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "primary",
  disabled = false,
  external = false,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${styles.button} ${styles[`button--${variant}`]} ${className}`;

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
