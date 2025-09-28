"use client";

import Image from "next/image";
import { FaFacebook, FaTwitter, FaFigma, FaSlack } from "react-icons/fa";

import styles from "./experience.module.scss";
import { experienceEntries } from "../../data/content";

const iconByCompany = {
  Facebook: FaFacebook,
  Twitter: FaTwitter,
  Figma: FaFigma,
  Slack: FaSlack,
};

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 d-flex flex-column gap-4">
            <div>
              <p className={styles["experience__eyebrow"]}>My Experience</p>
              <h2 className={styles["experience__headline"]}>
                Protect Your Portfolio with Airfolio's Security Features
              </h2>
            </div>
            <p className={styles["experience__text"]}>
              At Airfolio, we prioritize the security of your portfolio. With advanced encryption and secure servers,
              you can trust that your work is safe with us.
            </p>

            <div className="row row-cols-1 row-cols-md-2 g-4">
              {experienceEntries.map((item) => {
                const Icon = iconByCompany[item.company] ?? FaFigma;
                return (
                  <div key={item.company} className="col">
                    <article className={styles["experience__card"]}>
                      <header className={styles["experience__card-header"]}>
                        <Icon className={styles["experience__icon"]} aria-hidden="true" />
                        <p className={styles["experience__company"]}>{item.company}</p>
                      </header>
                      <p className={styles["experience__role"]}>{item.role}</p>
                      <p className={styles["experience__dates"]}>{item.dates}</p>
                      <p className={styles["experience__description"]}>{item.description}</p>
                    </article>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-6 text-center text-lg-end">
            <Image
              src="/assest/my-xperience-image.png"
              alt="Collage of recent product work"
              width={560}
              height={640}
              className={styles["experience__image"]}
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
