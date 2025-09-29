"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./navbar.module.scss";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
const navLinks = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
];

export default function Navbar() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg py-3 ${styles["site-navbar"]}`}>
      <div className="container">
        <motion.div
          className="navbar-brand d-flex align-items-center gap-2 mb-0"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <Image
              src="/assest/logo.png"
              width={40}
              height={40}
              alt="Airfolio logo"
              priority
            />
          </motion.div>
          <motion.span
            className={`fw-bold ${styles["site-navbar__brand-name"]}`}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          >
            Airfolio
          </motion.span>
        </motion.div>

        <button
          className={`navbar-toggler ${styles["site-navbar__navbar-toggler"]}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#primaryNav"
          aria-controls="primaryNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <HiOutlineBars3BottomRight />
          </span>
        </button>

        <div className="collapse navbar-collapse" id="primaryNav">
          <div
            className={`d-lg-flex d-flex align-items-center justify-content-between gap-lg-4 ms-lg-auto w-100 }`}
          >
            <div
              className={`flex-grow-1 ${styles["site-navbar__links"]} d-flex flex-row  align-items-center`}
            >
              <ul className="navbar-nav d-flex flex-row  align-items-center  gap-4 ">
                {navLinks.map((link) => (
                  <li
                    className={`nav-item  ${styles["site-navbar__nav-item-custom"]}`}
                    key={link.href}
                  >
                    <Link className="nav-link" href={link.href}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`text-lg-start ${styles["site-navbar__cta"]} d-flex justify-content-end align-items-center`}
            >
              <Link
                className={`btn px-4 py-2 ${styles["site-navbar__cta-button"]}`}
                href="#contact"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
