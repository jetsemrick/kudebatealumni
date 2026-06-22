import styles from "./PhotoPlaceholder.module.css";

type PhotoPlaceholderProps = {
  label: string;
  aspectRatio?: "landscape" | "portrait" | "square";
  className?: string;
};

export default function PhotoPlaceholder({
  label,
  aspectRatio = "landscape",
  className = "",
}: PhotoPlaceholderProps) {
  return (
    <div
      className={`${styles.placeholder} ${styles[`placeholder--${aspectRatio}`]} ${className}`}
      role="img"
      aria-label={`Photo placeholder: ${label}`}
    >
      <span className={styles.icon} aria-hidden="true">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
