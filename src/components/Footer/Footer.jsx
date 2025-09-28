"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import Button from "../Button/Button";
import styles from "./footer.module.scss";
import { footerNavigation, footerSocialLinks } from "../../data/content";

// Map simple ids to icon components so the data file stays string-based.\nconst socialIconById = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaTwitter,
  linkedin: FaLinkedinIn,
  youtube: FaYoutube,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <div className={styles.footer__logo}>
              <Image src="/assest/logo.svg" alt="Airfolio logo" width={32} height={32} />
              Airfolio
            </div>
            <p className={styles.footer__summary}>
              Stay up to date on the latest features and releases by joining our newsletter.
            </p>
            <form className={styles.footer__form}>
              <div className={styles.footer__input-row}>
                <input
                  className={styles.footer__input}
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  aria-label="Email address"
                />
                <Button type="submit" variant="light">
                  Subscribe
                </Button>
              </div>
              <p className={styles.footer__disclaimer}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          <div className={styles.footer__nav-grid}>
            {footerNavigation.map((group) => (
              <div key={group.heading}>
                <p className={styles.footer__group-heading}>{group.heading}</p>
                <div className={styles.footer__link-list}>
                  {group.links.map((link) => (
                    <Link key={link.label} href={link.href} className={styles.footer__link}>
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <p className={styles.footer__group-heading}>Follow us</p>
              <div className={styles.footer__social-list}>
                {footerSocialLinks.map((item) => {
                  const Icon = socialIconById[item.icon];
                  return (
                    <Link key={item.label} href={item.href} className={styles.footer__social-link}>
                      {Icon ? <Icon aria-hidden="true" /> : null}
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <p className="mb-0">© 2023 Created by Airkdan &amp; Powered by Webflow. All rights reserved.</p>
          <div className={styles.footer__legal-links}>
            <Link href="#" className={styles.footer__legal-link}>
              Privacy Policy
            </Link>
            <Link href="#" className={styles.footer__legal-link}>
              Terms of Service
            </Link>
            <Link href="#" className={styles.footer__legal-link}>
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
