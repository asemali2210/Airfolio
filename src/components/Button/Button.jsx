"use client";

import Link from "next/link";

import styles from "./button.module.scss";

const VARIANTS = {
  primary: styles["app-button--primary"],
  secondary: styles["app-button--secondary"],
  light: styles["app-button--light"],
  "outline-light": styles["app-button--outline-light"],
  brand: styles["app-button--brand"],
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}) {
  const variantClass = VARIANTS[variant] ?? VARIANTS.primary;
  const classes = [styles["app-button"], variantClass, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
