import Image from "next/image";

import styles from "./section-divider.module.scss";

const IMAGE_BY_VARIANT = {
  top: {
    src: "/assest/slash-top-divider.svg",
    alt: "decorative slash divider",
  },
  bottom: {
    src: "/assest/slash-bottom-divider.svg",
    alt: "decorative slash divider",
  },
};

export default function SectionDivider({ variant = "bottom" }) {
  const imageData = IMAGE_BY_VARIANT[variant] ?? IMAGE_BY_VARIANT.bottom;
  const imageClass = [
    styles["section-divider__image"],
    styles[`section-divider__image--${variant}`],
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["section-divider"]} aria-hidden="true">
      <Image
        src={imageData.src}
        alt={imageData.alt}
        width={1440}
        height={160}
        className={imageClass}
        priority={false}
      />
    </div>
  );
}
