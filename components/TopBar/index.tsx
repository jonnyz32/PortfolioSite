import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import styles from "./styles.module.scss";
import { useState, useEffect } from "react";

interface Props {
  active: string;
}

const TopBar = ({ active }: Props) => {
  const [navStatus, setNavStatus] = useState(0);
  /* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */

  return (
    <>
      <header className={styles.topBar}>
        <h3 style={{ color: "white" }}>Jonathan Zak</h3>
        <nav>
          <Link href="/">
            <a className={active === "Home" ? styles.active : styles.inactive}>
              Home
            </a>
          </Link>
          <Link href="/About">
            <a className={active === "About" ? styles.active : styles.inactive}>
              About
            </a>
          </Link>
          <Link href="/Experience">
            <a
              className={
                active === "Experience" ? styles.active : styles.inactive
              }
            >
              Experience
            </a>
          </Link>
          <Link href="/Projects">
            <a
              className={
                active === "Projects" ? styles.active : styles.inactive
              }
            >
              Projects
            </a>
          </Link>
          <Link href="/Contact">
            <a
              className={active === "Contact" ? styles.active : styles.inactive}
            >
              Contact
            </a>
          </Link>
        </nav>

        <div className={styles.hamburgerMenu}>
          <div
            // onClick={() => {
            //   setNavStatus((navStatus + 1) % 2);
            // }}
            onClick={() => {
              setNavStatus((navStatus + 1) % 2);
              if (navStatus === 0) {
                document.querySelector("#hamburgerItems").style =
                  "transform:scaleX(0)";
              } else {
                document.querySelector("#hamburgerItems").style =
                  "transform:scaleX(1)";
              }
            }}
            className={styles.hamburger}
          >
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <ul id="hamburgerItems" className={styles.hamburgerItems}>
            <li>
              {" "}
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/Experience">
                <a>Experience</a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/Projects">
                <a>Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/Contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* {children} */}
    </>
  );
};

export default TopBar;
