import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.subContainer}>
        <div className={styles.headTextContainer}><p>About Us</p></div>
        <div className={styles.Content}>
          <div className={styles.info}>
            <p>Mechanical Engineering Association (MEA) is an association in NIT Puducherry which is an amalgamation of students, scholars and faculty of Mechanical Engineering department, NIT Puducherry. Formed with the primary aim of exposing potential mechanical engineers to the challenges of the profession, MEA actively encourages the future engineers to celebrate the "joy of engineering". The association conducts workshops, professional events, exhibitions, along with social campaigns and lectures by great personalities to enhance the all-round development of students throughout the year. Along with the yearlong activities, MEA also hosts an fests which is a culmination of engineering competitions and workshops, serving as a launching platform for budding mechanical engineers from all over India.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
