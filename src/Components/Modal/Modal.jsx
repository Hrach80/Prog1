import React from "react";
import "../../Components/Modal/Modal.css";
import { useRegistrationForm } from "../../hooks/useRegistrationForm";

const countries = [
  "Armenia",
  "USA",
  "Brazil",
  "Germany",
  "Egypt",
  "Spain",
  "Italy",
  "India",
  "Japan",
  "United Kingdom",
  "Russia",
  "France",
];

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
  "Go",
  "Swift",
  "Kotlin",
];

const Modal = ({ isOpen, onClose }) => {
  const { formData, handleChange, handleSubmit } = useRegistrationForm(onClose);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+374 XX XXX XXX"
              required
            />
          </div>
          <div className="form-group">
            <label>What programming languages do you know?</label>
            <div className="checkbox-group">
              {programmingLanguages.map((lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    name="knownLanguages"
                    value={lang}
                    checked={formData.knownLanguages.includes(lang)}
                    onChange={handleChange}
                  />
                  {lang}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
