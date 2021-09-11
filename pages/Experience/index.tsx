import TopBar from "components/TopBar";
import React from "react";
import styles from "./styles.module.scss";

const Experience = () => {
  return (
    <>
      <TopBar active="Experience" />
      <main>
        <section>
          <div className={styles.jobItem}>
            <div className={styles.jobTitleContainer}>
              <h4>
                BuddyTree (Python, Flask, Marshmallow, Rebar, React.js /
                Next.js)
              </h4>
              <h4>June 2021 - September 2021</h4>
            </div>
            <h4 className={styles.location}>Software Engineer Intern</h4>
            <span className={styles.location}>Toronto, Ontario</span>
            <ul>
              <li>
                Devised and engineered backend schema and model changes as well
                as frontend changes to the user interface allowing users to
                associate their own questions and videos to their personal
                hangouts.
              </li>
              <li>
                Designed and coded a new feature allowing users to add social
                media links, a personal website, and a biography to their
                profile. Used regex to whitelist website urls as a preventative
                measure against cross-site scripting.
              </li>
              <li>
                Implemented notification list functionality for full hangouts,
                thereby allowing users to recieve a notification when a spot
                opens up in a hangout they've subscribed too
              </li>
            </ul>
          </div>

          <div className={styles.jobItem}>
            <div className={styles.jobTitleContainer}>
              <h4>IBM (Perl, Java, Jenkins, Linux)</h4>
              <h4>May 2019 - September 2020</h4>
            </div>
            <h4 className={styles.location}>
              Automation Test and Developer Intern
            </h4>
            <span className={styles.location}>Markham, Ontario</span>
            <ul>
              <li>
                Developed a Java CLI that increases the efficiency of running
                tests by handling the setup phase
              </li>
              <li>
                Enhanced and created automation scripts in Perl and Shell; the
                most significant enhancement resulted in decreasing the time for
                one test suite to run from 28 hours to 14 hours, allowing us to
                complete tests overnight
              </li>
              <li>
                Developed an application that saves the results of testing in a
                relational database, which helps with isolating bugs in testing
                infrastructure
              </li>
              <li>
                Designed hundreds of test cases as the sole tester for a new DB2
                feature for Kookmin Bank, identifying many bugs in the process;
                Conducted stress testing and investigated those bugs that were
                found
              </li>
              <li>
                Created a machine setup in Perl script which reduced the time
                taken to setup new machines from several hours to a few seconds
              </li>
              <li>
                Exposed hundreds of bugs in DB2 over the course of 16-months
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Experience;
