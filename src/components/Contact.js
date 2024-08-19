import React from "react";
import "../Style/contact.css";

import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import HomeIcon from "@mui/icons-material/Home";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows="4" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Let’s Connect and Make Your Vision a Reality! Drop Us a Message with
            Your Requirements, and Our Team of Solution Experts Will Reach Out
            to Assist You Promptly. We’re Excited to Work Together and Bring
            Your Ideas to Life!
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <MarkEmailUnreadIcon color="primary" className="icon" />
              <p>contact@algofission.com</p>
            </div>
            <div className="contact-item">
              <ContactPhoneIcon color="primary" className="icon" />
              <p>+1-234-567-890</p>
            </div>
            <div className="contact-item">
              <HomeIcon color="primary" className="icon" />
              <p>1234 Fission St, Tech City, TC 12345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="additional-cards-container">
        <div className="additional-card">
          <h3>Our Mission</h3>
          <p>To empower businesses with top-notch technological solutions.</p>
        </div>

        <div className="additional-card">
          <h3>Our Vision</h3>
          <p>
            To be a global leader in web and app development, and electronic
            hardware.
          </p>
        </div>

        <div className="additional-card">
          <h3>Our Values</h3>
          <p>Innovation, Quality, and Customer Satisfaction.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
