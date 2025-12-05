import React from "react";
import styles from "./Education.module.css";
import education from "../../data/education.json";

export const Education = () => {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Education</h2>

      <div className={styles.items}>
        {education.map((item, index) => (
          <div key={index} className={styles.card}>
            {/* ===== TOP ROW: College (Left) — Duration (Right) ===== */}
            <div className={styles.row}>
              <h3 className={styles.college}>{item.institution}</h3>
              <p className={styles.duration}>{item.duration}</p>
            </div>

            {/* ===== SECOND ROW: Degree (Left) — Location (Right) ===== */}
            <div className={styles.row}>
              <p className={styles.degree}>{item.degree}</p>
              <p className={styles.location}>{item.location}</p>
            </div>

            {/* ===== SCORE (Separate Row) ===== */}
            <p className={styles.score}>{item.score}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
