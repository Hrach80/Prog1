import "../Contacts/Contacts.css";
import React, { useRef, useEffect } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Contacts = () => {
  const nameInputRef = useRef(null);

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  
  const focusOnNameInput = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  return (
    <div className="ContactsBox">
      <h1 className="contactsH1">Get in Touch</h1>
      <div className="ContactsContent">
        <div className="ContactInfo">
          <p className="contactP">
            Have a project in mind or just want to say hello? Feel free to reach
            out! I'm always open to new opportunities and collaborations.
          </p>
          <div className="contactDetails">
            <div className="detailItem">
              <FontAwesomeIcon icon={faEnvelope} className="contactIcon" />
              <a className="contA" href="mailto:hrachyavagarshakyan@gmail.com">
                hrachyavagarshakyan@gmail.com
              </a>
            </div>
            <div className="detailItem">
              <FontAwesomeIcon icon={faPhone} className="contactIcon" />
              <a className="contA" href="tel:+37494395221">
                +37494395221
              </a>
            </div>
            <div className="detailItem">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="contactIcon" />
              <a
                className="contA"
                href="https://www.google.com/maps/search/?api=1&query=Yerevan%2C%20Armenia"
                target="_blank"
                rel="noopener noreferrer"
              >
                Yerevan, Armenia
              </a>
            </div>
          </div>
          <div className="socialLinks">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIconLink"
            >
              <FontAwesomeIcon icon={faLinkedin} className="socialIcon" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIconLink"
            >
              <FontAwesomeIcon icon={faGithub} className="socialIcon" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="socialIconLink"
            >
              <FontAwesomeIcon icon={faXTwitter} className="socialIcon" />{" "}
            </a>
          </div>
        </div>
        <div className="ContactForm">
          <h2 className="formH2">Send a Message</h2>
          <form className="contactForm">
            <input
              ref={nameInputRef}
              onClick={focusOnNameInput}
              type="text"
              placeholder="Your Name"
              className="formInput"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="formInput"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="formTextarea"
            ></textarea>
            <button type="submit" className="submitButton">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
