"use client";

import { motion } from "framer-motion";

import Button from "../Button/Button";
import styles from "./cta-buttons.module.scss";
import { heroCtaButtons } from "../../data/content";

const buttonVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: customDelay, duration: 0.35, ease: "easeOut" },
  }),
};

export default function CtaButtons({
  buttons = heroCtaButtons,
  layout = "horizontal",
  className = "",
}) {
  const containerClasses = [
    styles["cta-buttons"],
    styles[`cta-buttons--${layout}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      {buttons.map(({ label, href, variant = "primary", ...rest }, index) => (
        <motion.div
          key={`${label}-${href}-${index}`}
          className={styles["cta-buttons__item"]}
          custom={index * 0.12}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <Button href={href} variant={variant} {...rest}>
            {label}
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
