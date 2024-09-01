import React, { useState } from 'react';
import styles from './Contact.module.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, query } = formData;
    const adminEmail = 'admin@mechanicaldept.com'; // Replace with actual admin email
    const subject = encodeURIComponent('Contact Us Form Submission');
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nQuery: ${query}`);
    const mailtoLink = `mailto:${adminEmail}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink; // Open the default email client
  };

  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.heading}>
        Contact <span>Us!</span>
        <hr className={styles['horizontal-line']} />
      </h2>

      <form onSubmit={handleSubmit}>
        <div className={styles['form-container']}>
          <div className={styles.content}>
            <h3>Address</h3>
            <address>
              <p>National Institute Of Technology Puducherry, Thiruvettakudy, Karaikal, Puducherry, India - 609609</p>
              <br />
            </address>
            <h3>Email Us: </h3>
            <address>
              <p>Dr. Jack J Kenned: jack.kenned@nitpy.ac.in</p>
              <p>Dr. Vadivukkarasan M: m.vadivu@nitpy.ac.in</p>
              <br />
              <p>Call Us: +91 94474 22573</p>
            </address>
          </div>
          <div className={styles['form-fields']}>
            <div className={styles['input-box']}>
              <input
                className={`${styles['form-control']}`}
                id="name"
                name="name"
                placeholder="Your Full Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className={`${styles['form-control']}`}
                id="email"
                name="email"
                placeholder="Your Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={`${styles['input-box']} ${styles.contac}`}>
              <input
                className={`${styles['form-control']}`}
                type='tel'
                id="phone"
                name="phone"
                placeholder="Your Contact No"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              className={`${styles['form-control']}`}
              name="query"
              id="query"
              cols="30"
              rows="5"
              placeholder="Query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
            <input type="submit" value="Send Message" className={styles['submit-btn']} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default ContactUs;
