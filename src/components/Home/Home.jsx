import React from 'react';
import CountUp from 'react-countup';  // Import CountUp component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  // Import FontAwesomeIcon component
import { faBullhorn } from '@fortawesome/free-solid-svg-icons'; 
import styles from './Home.module.css'; // Import the CSS module

const Home = () => {
    const newsItems = [
        "The Mechanical Engineering Association will hold a seminar on sustainable manufacturing on September 15th. Stay tuned for more updates!",
        "Join us for a webinar on AI in Mechanical Engineering on October 10th.",
        "New partnership with XYZ Corporation to enhance practical learning.",
        "Research funding opportunities available for innovative projects."
    ];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headContainer}>
                <div className={styles.mainText}>
                    <p className={styles.underlineAnimation}>MECHANICAL ENGINEERING ASSOCIATION</p>
                </div>
                <div className={styles.subText}>
                    <p className={styles.underlineAnimation}>NIT PUDUCHERRY</p>
                </div>
            </div>
            <div className={styles.announcement}>
                <div className={styles.announcementSide}>
                    <div className={styles.atextCon}>
                        <p className={styles.atext}>Announcement</p>
                    </div>
                    <FontAwesomeIcon icon={faBullhorn} className={styles.announcementIcon} />
                </div>
                <div className={styles.announcementText}>
                    <div className={styles.newsSlider}>
                        {newsItems.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className={styles.homeDetails}>
                <div className={styles.sideDetails}>
                    <div><p className={styles.heading2}>OUR PURPOSE</p></div>
                    <div><p className={styles.info2}>Conduct seminars with industry experts. Coordinate conferences to discuss and ideate relating specific field of interest. Funding innovations of young minds.</p></div>
                </div>
                <div className={styles.middleDetails}>
                    <div><p className={styles.heading1}>OUR VISION</p></div>
                    <div><p className={styles.info1}>We are established to bring in Industrial exposure along with academic knowledge and improvising practical knowledge to lay a concrete foundation for the upcoming generation of engineers. A vibrant department with a group of zestful students and faculties interested in innovative trends in technology. Faculties endeavor to provide a sound foundation for the students both in theoretical and research aspects.</p></div>
                </div>
                <div className={styles.sideDetails}>
                    <div><p className={styles.heading2}>OUR MISSION</p></div>
                    <div><p className={styles.info2}>The role of the association is to accelerate the growth of the mechanical engineering students with much-needed exposure to real-life engineering problems, enlighten students about the various research opportunities, and keep them well-informed about technological developments across the globe.</p></div>
                </div>
            </div>
            <div className={styles.countingSection}>
                <div className={styles.counter}>
                    <CountUp end={38} duration={6} className={styles.num} />
                    <h2>Team Members</h2>
                </div>
                <div className={styles.counter}>
                    <CountUp end={118} duration={6} className={styles.num}/>
                    <h2>Aspiring Minds</h2>
                </div>
                <div className={styles.counter}>
                    <CountUp end={2021} duration={3} className={styles.num}/>
                    <h2>Founded Year</h2>
                </div>
            </div>
        </div>
    );
};

export default Home;
