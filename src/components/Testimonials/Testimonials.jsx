"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { SiWebflow } from "react-icons/si";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./testimonials.module.scss";
import { testimonialCards } from "../../data/content";

const stars = Array.from({ length: 5 });

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className="container">
        <div className={styles["testimonials__header"]}>
          <p className={styles["testimonials__eyebrow"]}>Testimonials</p>
          <h2 className={styles["testimonials__headline"]}>What partners say about working with Airfolio</h2>
          <p className={styles["testimonials__description"]}>
            We collaborate closely with founders, marketers, and product teams to ship polished experiences that move metrics.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          spaceBetween={24}
          autoHeight
        >
          {testimonialCards.map((item) => (
            <SwiperSlide key={item.author.name}>
              <article className={styles["testimonials__card"]}>
                <div className={styles["testimonials__stars"]}>
                  {stars.map((_, index) => (
                    <FaStar key={`star-${item.author.name}-${index}`} />
                  ))}
                </div>
                <p className={styles["testimonials__quote"]}>{item.quote}</p>
                <div className={styles["testimonials__author"]}>
                  <div className={styles["testimonials__avatar"]}>
                    <Image src={item.author.avatar} alt={item.author.name} width={64} height={64} />
                  </div>
                  <div className={styles["testimonials__author-details"]}>
                    <p className={styles["testimonials__author-name"]}>{item.author.name}</p>
                    <p className={styles["testimonials__author-title"]}>{item.author.title}</p>
                  </div>
                </div>
                <div className={styles["testimonials__meta"]}>
                  <span>Case study available</span>
                  <span className={styles["testimonials__webflow"]}>
                    <SiWebflow /> Webflow build
                  </span>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
