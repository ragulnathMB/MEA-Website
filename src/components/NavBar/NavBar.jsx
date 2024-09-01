import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <img className={styles.imageLogo} src="/picsvg_download.svg" alt="Your Icon" />
        </div>
        
        {/* Desktop Navigation Links */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/about-us" className={styles.navLink}>About Us</Link>
          <Link to="/our-team" className={styles.navLink}>Our Team</Link>
          <Link to="/events" className={styles.navLink}>Events</Link>
          <Link to="/contact" className={styles.navLink}>Contact</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className={styles.navbarHamburger} onClick={toggleModal}>
          <span className={styles.hamburgerIcon}>&#9776;</span>
        </div>
      </nav>

      {/* Modal for Mobile Navigation */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>&times;</span>
            <ul className={styles.modalLinks}>
              <li><Link to="/" className={styles.modalLink} onClick={toggleModal}>Home</Link></li>
              <li><Link to="/about-us" className={styles.modalLink} onClick={toggleModal}>About Us</Link></li>
              <li><Link to="/our-team" className={styles.modalLink} onClick={toggleModal}>Our Team</Link></li>
              <li><Link to="/events" className={styles.modalLink} onClick={toggleModal}>Events</Link></li>
              <li><Link to="/contact" className={styles.modalLink} onClick={toggleModal}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
