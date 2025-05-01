import React from "react";
import styles from "./Services.module.css";
import services from "../../data/services.json";
import { getImageUrl } from "../../utils";

export const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={`${styles.title} marker marker-center`}>
        My Services
      </h2>
      <div className={styles.content}>
        <div className={styles.servicesItemText}>
          <div className="text-center">
            <p>
              I offer front-end development services focused on creating responsive,
              user-friendly websites using modern frameworks like React and Vue.
              With experience in UI/UX design and API integration, I craft intuitive interfaces that enhance user experience.
              I'm also actively learning mobile app development to expand my capabilities and deliver more versatile solutions.
            </p>
          </div>
        </div>

        <div className={styles.services}>
          {services.map((service, id) => {
            return (
              <div key={id} className={styles.service}>
                <div className={styles.serviceImageContainer}>
                  <img src={getImageUrl(service.imageSrc)} alt={service.title} />
                </div>
                <p className={styles.serviceTitle}>{service.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section >
  );
};
