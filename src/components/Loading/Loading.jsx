import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'; // Gear icon
import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.gearContainer}>
        <FontAwesomeIcon icon={faCog} className={`${styles.gear} ${styles.large}`} />
        <FontAwesomeIcon icon={faCog} className={`${styles.gear} ${styles.small}`} />
      </div>
      <div><p>Gearing up.. please wait..</p></div>
    </div>
  );
};

export default Loading;
