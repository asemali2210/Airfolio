"use client";

import Image from "next/image";

import CtaButtons from "../CtaButtons/CtaButtons";
import styles from "./grow.module.scss";
import { growVectors, growCtaButtons } from "../../data/content";

export default function Grow() {
  return (
    <section id="grow" className={styles.grow}>
      <div className={styles["grow__vectors"]} aria-hidden="true">
        {growVectors.map((vector) => (
          <Image
            key={vector.modifier}
            src={vector.src}
            alt=""
            width={280}
            height={280}
            className={`${styles["grow__vector"]} ${
              styles[`grow__vector--${vector.modifier}`]
            }`}
            priority={false}
          />
        ))}
      </div>

      <div className={styles["grow__container"]}>
        <h2 className={styles["grow__headline"]}>
          Grow your business with AirWave
        </h2>
        <p className={styles["grow__description"]}>
          Discover the power of AirWave's marketing services and start earning
          today.
        </p>
        <div className={styles["grow__actions"]}>
          <CtaButtons buttons={growCtaButtons} layout="horizontal" />
        </div>
      </div>
    </section>
  );
}
