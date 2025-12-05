import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className={styles.container}>
      {/* === Left Section (Text Content) === */}
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className={styles.title}>
          Hi, I'm Sarayu{" "}
          <motion.span
            className={styles.highlight}
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ display: "inline-block", transformOrigin: "bottom right" }}
          >
            👋
          </motion.span>
        </h1>

        <p className={styles.subtitle}>
          <span className={styles.gradientText}>
            Electronics & Communication Engineering Student
          </span>
        </p>

        <p className={styles.description}>
          Passionate about developing innovative ML-powered systems and embedded
          solutions. Experienced in building EMG-based seizure detectors, facial
          recognition attendance systems, and full-stack web applications.
          Skilled in <b>Python</b>, <b>MATLAB</b>, <b>MySQL</b>, <b>OpenCV</b>,
          and <b>Arduino</b>.
        </p>

        {/* === Buttons === */}
        <div className={styles.btnGroup}>
          <a href="#contact" className={styles.contactBtn}>
            📩 Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/18AWtZOts2QMcRMPiZmu8DpRtdQk3p-TB/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            📄 My Resume
          </a>
        </div>
      </motion.div>

      {/* === Right Section (Floating Animated Image) === */}
      <motion.img
        src={getImageUrl("hero/Heroimage1.png")}
        alt="Hero illustration"
        className={styles.heroImg}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === Background Glow Effects === */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
