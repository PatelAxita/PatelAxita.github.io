import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook } from "@fortawesome/free-brands-svg-icons";
// css imports
import styles from "./Hero.module.css";
// utility imports
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className="lead text-uppercase mb-1">Hello!</p>
        <h1 className="intro-title marker">
          I'm Axita Patel
        </h1>
        <p className={styles.description}>
          Web, desktop Application Developer
        </p>

        {/* Social media Links */}
        <nav className="social-nav">
          <ul className={styles.links}>
            <li className={styles.link}>
              <a className="nav-link"
                href="https://www.linkedin.com/in/axitap31/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <span className="menu-title sr-only">LinkedIn</span>
              </a>
            </li>
            <li className={styles.link}>
              <a className="nav-link"
                href="https://www.facebook.com/profile.php?id=100007907927641"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span className="menu-title sr-only">Facebook</span>
              </a>
            </li>
          </ul>
        </nav>
      {/* Call to action button */}
      <div>
        <a href="#contact" className={styles.contactBtn}>Get In Touch <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      </div>
      {/* Hero image */}
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Illustration of Axita Patel"
        className={styles.heroImg}
      />
      {/* Background Effects */}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
