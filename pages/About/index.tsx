import Link from "next/link";
import TopBar from "components/TopBar";
import styles from "./styles.module.scss";

const AboutPage = () => {
  return (
    <>
      <TopBar active="About" />
      <main>
        <h1 style={{ color: "gold" }}>About me</h1>
        <section className={styles.aboutText}>
          I am a computer science specialist graduating from University of
          Toronto in April 2022. Working with data is something that I very much
          enjoy, as well as thinking about how to mitigate security
          vulnerabilities and writing clean frontend and backend code. I am
          currently searching for software developer internships starting in
          January 2022, as well as full time work for when I graduate in April.
        </section>
        <section className={styles.aboutText}>
          In my personal life, I like to be active as much as possible. In my
          free time, you can often find me rock-climbing or hiking with friends.
          While indoors, I like to play chess, find great shows to binge, or
          learn something new.
        </section>
      </main>
    </>
  );
};

export default AboutPage;
