"use client";

import Image from "next/image";

import Button from "../Button/Button";
import styles from "./about.module.scss";
import { aboutStats } from "../../data/content";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row gy-5 align-items-center">
          <div className="col-lg-6 text-center text-lg-start">
            <Image
              src="/assest/about-me-image.png"
              alt="Portrait of Jane Cooper working on design concepts"
              width={540}
              height={620}
              className={styles["about__image"]}
              priority={false}
            />
          </div>

          <div className="col-lg-6">
            <p className={styles["about__eyebrow"]}>About me</p>
            <h2 className={styles["about__headline"]}>
              Who is responsible for all of this impressive effort?
            </h2>
            <p className={styles["about__text"]}>
              I'm Jane, a senior product designer and Webflow developer who
              thrives on solving complex problems with clear systems. Over the
              last decade I've partnered with startups and enterprise teams to
              ship high-performing interfaces, prototype fast, and scale design
              languages that keep engineering velocity high.
            </p>

            <div className="row row-cols-1 row-cols-sm-3 g-3 mt-2">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="col">
                  <div className={styles["about__stat"]}>
                    <p className={styles["about__stat-value"]}>{stat.value}</p>
                    <p className={styles["about__stat-label"]}>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button href="#contact" variant="primary">
                About Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
