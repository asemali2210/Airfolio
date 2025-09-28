"use client";

import Image from "next/image";
import Link from "next/link";

import Button from "../Button/Button";
import styles from "./blogs.module.scss";
import { blogPosts } from "../../data/content";

export default function Blogs() {
  return (
    <section id="blogs" className={styles.blogs}>
      <div className="container">
        <div className={styles["blogs__header"]}>
          <p className={styles["blogs__eyebrow"]}>Inspiration</p>
          <h2 className={styles["blogs__headline"]}>Discover the Design World</h2>
          <p className={styles["blogs__description"]}>
            Stay updated with the latest trends and insights in the design industry.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {blogPosts.map((post) => (
            <div className="col" key={post.title}>
              <article className={styles["blogs__card"]}>
                <div className="row g-0 align-items-center flex-column flex-md-row">
                  <div className="col-md-5">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={360}
                      height={260}
                      className={styles["blogs__image"]}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className={styles["blogs__body"]}>
                      <div className={styles["blogs__meta"]}>
                        <span className={styles["blogs__meta-tag"]}>{post.category}</span>
                        <span className={styles["blogs__meta-tag"]}>{post.readTime}</span>
                      </div>
                      <h3 className={styles["blogs__title"]}>{post.title}</h3>
                      <p className={styles["blogs__text"]}>{post.excerpt}</p>
                      <Link className={styles["blogs__link"]} href="#portfolio">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className={styles["blogs__actions"]}>
          <Button href="#portfolio" variant="brand">
            Explore all insights
          </Button>
        </div>
      </div>
    </section>
  );
}
