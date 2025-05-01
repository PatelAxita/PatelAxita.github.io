import React from "react";

import styles from "./Skills.module.css";
import "../../assets/css/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={`${styles.title} marker marker-center`}>
        My Skills
      </h2>
      <div className={styles.content}>
        <div className={styles.skillsItemText}>
          <div className="text-center">
            <p>
              I am a quick learner with a strong foundation in front-end development and UI/UX design.
              I’m constantly expanding my skills, including mobile app development.
            </p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: "#fff", padding: "2rem" }}>
        <div className="row">
          <div className="col-md-5">
            <div className={styles.progressWrapper}>

              <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>HTML5</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>90%</span>

              </div>

              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar" data-aos="zoom-in-right"
                  data-aos-delay="100"
                  data-aos-anchor=".skills-section"
                  style={{ width: "90%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>CSS3</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>90%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="200"
                  data-aos-anchor=".skills-section"
                  style={{ width: "90%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100">

                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>JavaScript</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>85%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="300"
                  data-aos-anchor=".skills-section"
                  style={{ width: "85%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>React</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>80%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="300"
                  data-aos-anchor=".skills-section"
                  style={{ width: "80%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>Solid JS</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>60%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="600"
                  data-aos-anchor=".skills-section"
                  style={{ width: "60%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5 offset-md-2">
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>Angular</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>75%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="400"
                  data-aos-anchor=".skills-section"
                  style={{ width: "75%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100">

                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>RESTful API's</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>85%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="500"
                  data-aos-anchor=".skills-section"
                  style={{ width: "85%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100">

                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

            <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>Ionic</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>60%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="600"
                  data-aos-anchor=".skills-section"
                  style={{ width: "60%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
            <div className={styles.progressWrapper}>

              <div className={`${styles.skillsFont} d-flex text-small fw-bolder`}>
                <span className={`${styles.skillLabel} me-auto`} style={{ color: "#212529" }}>Vue JS</span>
                <span className={`${styles.skillLabel}`} style={{ color: "#212529" }}>75%</span>
              </div>
              <div className="progress my-1">
                <div className="progress-bar bg-yellow"
                  role="progressbar"
                  data-aos="zoom-in-right"
                  data-aos-delay="600"
                  data-aos-anchor=".skills-section"
                  style={{ width: "75%", backgroundColor: "#F6E05E" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section >
  );
};


