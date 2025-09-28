"use client";

import Image from "next/image";

import CtaButtons from "../CtaButtons/CtaButtons";
import styles from "./hero.module.scss";
import {
  heroVectors,
  heroCompanyLogos,
  heroCtaButtons,
} from "../../data/content";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles["hero__vectors"]} aria-hidden="true">
        {heroVectors.map((vector) => (
          <Image
            key={vector.modifier}
            src={vector.src}
            alt=""
            width={50}
            height={50}
            className={`${styles["hero__vector"]} ${
              styles[`hero__vector--${vector.modifier}`]
            }`}
            priority
          />
        ))}
      </div>

      <div className={`container ${styles["hero__container"]}`}>
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6">
            <p className={styles["hero__eyebrow"]}>
              Hi there, my name is Jane Cooper
            </p>
            <h1 className={styles["hero__headline"]}>
              Showcase Your Work <br /> with Airfolio&apos;s <br /> Creative
              Solutions
            </h1>
            <p className={`${styles["hero__description"]} mb-0`}>
              Create stunning portfolios and websites with Airfolio&apos;s UI/UX
              design and Webflow development services.
            </p>
            <div className="mt-4">
              <CtaButtons buttons={heroCtaButtons} layout="horizontal" />
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <Image
              src="/assest/hero-image.png"
              alt="Showcase of Jane Cooper's design portfolio"
              width={540}
              height={620}
              className={styles["hero__image"]}
              priority
            />
          </div>
        </div>

        <div className="row align-items-center mt-5 gy-4">
          <div className="col-md-auto">
            <p className={styles["hero__brands-label"]}>
              Trusted by leading companies
            </p>
          </div>
          <div className="col">
            <div className={styles["hero__brands-logos"]}>
              {heroCompanyLogos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className={styles["hero__brand-logo"]}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
