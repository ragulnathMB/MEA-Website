import React from 'react';
import styles from './Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src="/picsvg_download.svg" alt="Your Icon" />
        </div>
        <div className={styles.col}>
          <h3>Social Media<div className={styles.underline}><span></span></div></h3>
          <p><a href="https://www.linkedin.com/company/meanitpy/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></p>
          <p><a href="https://www.instagram.com/meanitpy/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></p>
        </div>
        <div className={styles.col}>
          <h3>Contact Us <div className={styles.underline}><span></span></div></h3>
          <p><a href="/contact"><FontAwesomeIcon icon={faEnvelope} /> admin@meanitpy.in</a></p>
          <p><a href="/contact"><FontAwesomeIcon icon={faPhone} /> +91 94474 22573</a></p>
          <p><a href="https://maps.app.goo.gl/jXndX8H8oUzZ4wRE7" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMapMarkerAlt} /> NIT PUDUCHERRY</a></p>
        </div>
      </div>
      <hr className={styles.hr} />
      <p className={styles.copyright}>Copyright &copy; 2024 MEA NITPY. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
