import React, { useState } from 'react';
import styles from './Events.module.css'; // Import the CSS module

const events = [
  {
    id: 1,
    title: 'One-Day Symposium',
    date: 'September 15, 2024',
    images: [
      '/symposium-event/image1.jpg',
      '/symposium-event/image2.jpg',
      '/symposium-event/image3.jpg',
      '/symposium-event/image4.jpg',
      '/symposium-event/image5.jpg',
      '/symposium-event/image6.jpg',
      '/symposium-event/image7.jpg',
      '/symposium-event/image8.jpg',
      '/symposium-event/image9.jpg',
      '/symposium-event/image10.jpg',
    ]
  },
  {
    id: 2,
    title: 'MEA Workshop 2024',
    date: 'October 10, 2024',
    images: [
      '/67SRQt.jpg',
      '/67SRQt.jpg'
    ]
  },
  // Add more events as needed
];

const Event = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (event) => {
    setCurrentEvent(event);
    setCurrentImageIndex(0); // Start with the first image
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (currentEvent) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentEvent.images.length);
    }
  };

  const prevImage = () => {
    if (currentEvent) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? currentEvent.images.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.head1}><p>Upcoming Events</p></div>
        <div className={styles.infoContainer}>
          {events.map(event => (
            <div key={event.id} className={styles.eventCard} onClick={() => openModal(event)}>
              <img src={event.images[0]} alt={event.title} className={styles.eventImage} /> {/* Display the first image */}
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.subContainer}>
        <div className={styles.head1}><p>Past Events</p></div>
        <div className={styles.infoContainer}>
          {events.map(event => (
            <div key={event.id} className={styles.eventCard} onClick={() => openModal(event)}>
              <img src={event.images[0]} alt={event.title} className={styles.eventImage} /> {/* Display the first image */}
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && currentEvent && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={closeModal}>&times;</span>
            <div className={styles.imageContainer}>
              <button className={styles.navButton} onClick={prevImage}>❮</button>
              <img src={currentEvent.images[currentImageIndex]} alt={`Event ${currentEvent.title}`} />
              <button className={styles.navButton} onClick={nextImage}>❯</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Event;
