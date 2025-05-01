import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container}  id="experience" >
      <h2 className={`${styles.title} marker marker-center`}>
        Experience
      </h2>
      <div className={styles.content}>
      <ul className={styles.experienceItems}>
        {history.map((historyItem, id) => (
          <li key={id} className={styles.experienceItem}>
            <img
              src={getImageUrl(historyItem.imageSrc)}
              alt={`${historyItem.organisation} Logo`}
              className={styles.experienceImage}
            />
            <div className={styles.experienceDetails}>
              <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
              <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
              <ul>
                {historyItem.experiences.map((exp, idx) => (
                  <li key={idx}>{exp}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
        </ul>
      </div>
    </section >
  );
};