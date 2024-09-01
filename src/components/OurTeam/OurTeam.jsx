import React, { useState } from 'react';
import styles from './OurTeam.module.css'; // Import CSS Module

const OurTeam = () => {
  // Array containing the data for each person
  const teamMembers = [
    { name: 'John Doe', designation: 'President', imgSrc: './business-man-profile-vector.jpg' },
    { name: 'Jane Smith', designation: 'Vice President', imgSrc: './business-man-profile-vector.jpg' },
    { name: 'Emily Johnson', designation: 'Treasurer', imgSrc: './business-man-profile-vector.jpg' },
    { name: 'Michael Brown', designation: 'Secretary', imgSrc: './business-man-profile-vector.jpg' },
    { name: 'Sophia White', designation: 'Advisor', imgSrc: './business-man-profile-vector.jpg' },
    { name: 'James Davis', designation: 'Web Developer', imgSrc: './business-man-profile-vector.jpg' }
  ];

  const [hoveredMember, setHoveredMember] = useState(null);

  return (
    <div className={styles.ourTeam}>
      <div>
        <h1 className={styles.heading}>Our Team</h1>
      </div>

      <div className={styles.container}>
        <div className={styles.head}><p>Student Council</p></div>
        <div className={styles.body}>
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className={styles.profileContainer}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                className={`${styles.profile} ${hoveredMember === index ? styles.blur : ''}`}
                src={member.imgSrc}
                alt='profile'
              />
              {hoveredMember === index && (
                <div className={styles.info}>
                  <p>{member.name}</p>
                  <p>{member.designation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.body}>
          {teamMembers.slice(4, 6).map((member, index) => (
            <div
              key={index + 4}
              className={styles.profileContainer}
              onMouseEnter={() => setHoveredMember(index + 4)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                className={`${styles.profile} ${hoveredMember === index + 4 ? styles.blur : ''}`}
                src={member.imgSrc}
                alt='profile'
              />
              {hoveredMember === index + 4 && (
                <div className={styles.info}>
                  <p>{member.name}</p>
                  <p>{member.designation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={styles.head2}><p>Faculty Advisors</p></div>
      </div>

      <div className={styles.container}>
        <div className={styles.head}><p>Web Team</p></div>
        <div className={styles.body}>
          {teamMembers.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className={styles.profileContainer}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <img
                className={`${styles.profile} ${hoveredMember === index ? styles.blur : ''}`}
                src={member.imgSrc}
                alt='profile'
              />
              {hoveredMember === index && (
                <div className={styles.info}>
                  <p>{member.name}</p>
                  <p>{member.designation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
