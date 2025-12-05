import React from "react";
import styles from "./Certificates.module.css";
import certificates from "../../data/certificates.json";
import { getImageUrl } from "../../utils";

export const Certificates = () => {
  return (
    <section id="certificates" className={styles.container}>
      <h2 className={styles.title}>Certificates</h2>

      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <div key={index} className={styles.card}>
            <img
              src={getImageUrl(cert.imageSrc)}
              alt={cert.title}
              className={styles.icon}
            />
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>
            {cert.year && <p>{cert.year}</p>}
            {cert.hours && <p>{cert.hours}</p>}

            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
