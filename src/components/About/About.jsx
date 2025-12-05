import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Electronics and Communication Engineering Student</h3>
              <p>
                Pursuing a B.Tech in Electronics and Communication Engineering
                with strong knowledge in embedded systems, digital design, cloud
                fundamentals, and full-stack development. Skilled in applying
                engineering concepts to develop practical and innovative
                solutions.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Machine Learning & Embedded Systems Enthusiast</h3>
              <p>
                Experienced in building ML-powered systems and IoT-based
                solutions such as seizure detection using EMG signals and a
                smart attendance system. Skilled in Python, MATLAB, OpenCV,
                MySQL, and real-time data processing.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ncc1.jpg")} alt="NCC icon" />
            <div className={styles.aboutItemText}>
              <h3>Project & Innovation Driven</h3>
              <p>
                Passionate about creating impactful engineering projects
                including wearable health-monitoring devices, ML-based job role
                prediction systems, digital design controllers, and
                gesture-based interfaces. Strong analytical and problem-solving
                mindset with proven achievements and published patents.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
