import React, { useState } from 'react';
import styles from './OurTeam.module.css'; // Import CSS Module

const OurTeam = () => {
  // Array containing the data for each person
  const StudentCouncil = [
    { name: 'Ganta Venketa Satya Sai Sireesha', designation: 'President', imgSrc: './gvsssPresident.jpg' },
    { name: 'A Priya Deepiga', designation: 'Vice President', imgSrc: './apdVp.jpg' },
    { name: 'Dunna Yashwanth Kumar', designation: 'Joint Secretary', imgSrc: './dykJs.jpg' },
  ];
  const teamMembers2 = [
    { name: ' Dr. Jack.J.Kenned', designation: 'Assistant Professor', imgSrc: './jackkenned.png' },
    { name: 'Dr. Vadivukkarasan M', designation: 'Assistant Professor', imgSrc: './Vadivukkarasan.jpg' },
  ];
  const WebTeam = [
    { name: 'Adhish JS', designation: 'Web Developer', imgSrc: './ajsWd.jpg' },
    { name: 'Bhuvanesh', designation: 'Web Designer', imgSrc: './bWd.jpg' },
    { name: 'Karthigeyan S', designation: 'Web Designer', imgSrc: './kWd.jpg' },
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
          {StudentCouncil.map((member, index) => (
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
          {teamMembers2.map((member, index) => (
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
          {WebTeam.map((member, index) => (
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
