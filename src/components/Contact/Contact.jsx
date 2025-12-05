import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        {/* Email */}
        <li>
          <a
            href="mailto:anumallasarayu@gmail.com"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <span>Email</span>
          </a>
        </li>

        {/* LinkedIn */}
        <li>
          <a
            href="https://www.linkedin.com/in/sarayu-anumalla-9580b9259"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <span>LinkedIn</span>
          </a>
        </li>

        {/* GitHub */}
        <li>
          <a
            href="https://github.com/Anumallasarayu123"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <span>GitHub</span>
          </a>
        </li>
      </ul>

      {/* Copyright Section */}
      <div className={styles.copyRight}>
        <p>
          © {new Date().getFullYear()} <span>Anumalla Sarayu</span> • All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
