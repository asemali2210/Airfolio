"use client";

import { useId } from "react";

import Button from "../Button/Button";
import styles from "./faqs.module.scss";
import { faqItems } from "../../data/content";

export default function Faqs() {
  const accordionId = useId();

  return (
    <section id="faqs" className={styles.faqs}>
      <div className="container">
        <div className={styles["faqs__header"]}>
          <h2 className={styles["faqs__headline"]}>FAQs</h2>
          <p className={styles["faqs__description"]}>
            Find answers to commonly asked questions about Airfolio and its services.
          </p>
        </div>

        <div className="accordion" id={`faqs-${accordionId}`}>
          {faqItems.map((item, index) => {
            const headingId = `faq-heading-${index}`;
            const collapseId = `faq-collapse-${index}`;
            const isFirst = index === 0;
            return (
              <div className="accordion-item" key={item.question}>
                <h2 className="accordion-header" id={headingId}>
                  <button
                    className={`accordion-button ${isFirst ? "" : "collapsed"}`.trim()}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${collapseId}`}
                    aria-expanded={isFirst ? "true" : "false"}
                    aria-controls={collapseId}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  id={collapseId}
                  className={`accordion-collapse collapse ${isFirst ? "show" : ""}`.trim()}
                  aria-labelledby={headingId}
                  data-bs-parent={`#faqs-${accordionId}`}
                >
                  <div className="accordion-body">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles["faqs__cta-box"]}>
          <p className={styles["faqs__cta-headline"]}>Still have questions?</p>
          <p className={styles["faqs__cta-text"]}>Contact us for more information.</p>
          <Button href="#contact" variant="primary">
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
