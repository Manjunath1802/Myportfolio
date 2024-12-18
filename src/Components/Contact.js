import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id='contact'>
      <h2 className="title">Get In Touch</h2>
      <div className="container">
        <form className="form">
          <div className="formGroup">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="formGroup">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="formGroup">
            <textarea placeholder="Your Message" rows={6} required></textarea>
          </div>
          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
        <div className="contactInfo">
          <div className="infoItem">
            <h3>Email</h3>
            <p>manjunathgangal2000@gmail.com</p>
          </div>
          <div className="infoItem">
            <h3>Phone</h3>
            <p>+919731962135</p>
          </div>
          <div className="infoItem">
            <h3>Location</h3>
            <p>Bangalore, India</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

