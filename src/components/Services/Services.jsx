"use client";

import Image from "next/image";

import CtaButtons from "../CtaButtons/CtaButtons";
import styles from "./services.module.scss";
import { serviceCards, heroCtaButtons } from "../../data/content";
import SectionDivider from "../SectionDivider/SectionDivider";

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-6">
            <p className={styles["services__eyebrow"]}>Our Services</p>
            <h2 className={styles["services__headline"]}>
              Take a look at the variety of services I offer.
            </h2>
          </div>
          <div className="col-lg-6">
            <p className={styles["services__description"]}>
              I partner with founders and product teams to close the gap between
              an idea and a polished launch, designing, building, and refining
              digital experiences that perform in the wild.
            </p>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-xl-4 g-4 mt-4">
          {serviceCards.map((service) => (
            <div key={service.title} className="col">
              <article className={styles["services__card"]}>
                <div className={styles["services__icon-wrapper"]}>
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    width={40}
                    height={40}
                    className={styles["services__icon"]}
                  />
                </div>
                <div>
                  <h3 className={styles["services__title"]}>{service.title}</h3>
                  <p className={styles["services__text"]}>
                    {service.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5 pb-3">
          <CtaButtons buttons={heroCtaButtons} layout="horizontal" />
        </div>
      </div>
      <SectionDivider />
    </section>
  );
}
