import React from "react";

import styles from "./About.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={`${styles.title} marker marker-center`}>
        About
      </h2>
      <div className={styles.content}>
        <img
          src="/assets/about/aboutimage.jpg"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Hello! I’m Axita Patel.</h3>
              <p align="justify">
                I’m a Frontend Developer with a strong passion for building responsive, user-centric web applications.
                With experience in React.js, Vue.js, Angular, HTML5, CSS3, and JavaScript (ES6+), I specialize in UI/UX design, REST API integration, and Agile development. My tech toolkit includes Redux, Bootstrap, Git, Jenkins, Docker, AWS, and testing tools like Postman, NeoLoad, and Zephyr.
                I’ve contributed to projects across utilities, government, education, and eCommerce, delivering scalable solutions through modern CI/CD pipelines. I thrive on collaboration, continuous learning, and crafting seamless digital experiences.
                I’m always eager to learn, grow, and contribute to meaningful projects—and I thrive in environments where creativity meets technology.
              </p>
              <div className="row mt-3">
                <div className="col-sm-2 d-flex align-items-center">
                  <div className="pb-1">Email:</div>
                </div>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="pb-1 fw-bolder">axitapatel8331@gmail.com</div>
                </div>
                <div className="col-sm-2 d-flex align-items-center">
                  <div className="pb-1">Phone:</div>
                </div>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="pb-1 fw-bolder">+1 xxxxxx2015</div>
                </div>
                <div className="col-sm-2 d-flex align-items-center">
                  <div className="pb-1">Address:</div>
                </div>
                <div className="col-sm-10 d-flex align-items-center">
                  <div className="pb-1 fw-bolder">Houston, Texas</div>
                </div>
              </div>

            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
