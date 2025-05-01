import React from "react";
import styles from "./Portfolio.module.css";
import Skills from "../../data/skills.json";

export const Portfolio = () => {
  return (
    <section className={styles.container} id="portfolio">
      <h2 className={`${styles.title} marker marker-center`}>
        Portfolio
      </h2>

      <div className={styles.content}>
        <div className={styles.grid}>
          {Skills.map((skill, index) => (
            <div className={styles.gridItem}>
              <a href={skill.link} target="_blanyk" rel="noopener noreferrer" className={styles.portfolioItem}>
                <figure className={styles.portfolioItem}>
                  <img
                    src={skill.imageSrc}
                    alt={`image_of_${skill.title.toLowerCase()}`}
                  />
                  <figcaption>
                    <h4>{skill.title}</h4>
                    <div>{skill.description}</div>
                  </figcaption>
                </figure>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
