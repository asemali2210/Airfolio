"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

import Button from "../Button/Button";
import styles from "./projects.module.scss";
import { projectCards } from "../../data/content";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.45, ease: "easeOut" },
  }),
};

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.div
          className={styles["projects__header"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUpVariants}
        >
          <p className={styles["projects__eyebrow"]}>Projects</p>
          <h2 className={styles["projects__headline"]}>Discover Our Success Stories</h2>
          <p className={styles["projects__description"]}>
            Explore our curated collection of successful projects.
          </p>
        </motion.div>

        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {projectCards.map((project, index) => (
            <div className="col" key={project.title}>
              <motion.article
                className={styles["projects__card"]}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.12}
                variants={fadeUpVariants}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={640}
                  height={420}
                  className={styles["projects__image"]}
                  loading="lazy"
                />
                <div className={styles["projects__body"]}>
                  <h3 className={styles["projects__title"]}>{project.title}</h3>
                  <p className={styles["projects__text"]}>{project.description}</p>
                  <div className={styles["projects__tags"]}>
                    {project.tags.map((tag) => (
                      <span key={`${project.title}-${tag}`} className={styles["projects__tag"]}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link className={styles["projects__link"]} href="#portfolio">
                    View project <FiArrowUpRight />
                  </Link>
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-center mt-5">
          <Button href="#portfolio" variant="primary">
            Check the full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
}
