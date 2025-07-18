import React, { useState } from "react";
import Modal from "../../Modal/Modal";
import "../../Pages/Registration/Registration.css";

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    const modalOverlay = document.querySelector(".modal-overlay");
    if (modalOverlay) {
      modalOverlay.classList.add("closing");
      modalOverlay.addEventListener(
        "animationend",
        () => {
          setIsModalOpen(false);
          modalOverlay.classList.remove("closing");
        },
        { once: true }
      );
    } else {
      setIsModalOpen(false);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-content">
        <h1>Join Our Community! 👋</h1>
        <p className="description">
          Create an account to unlock exclusive features, save your progress,
          and connect with other members. It's quick, easy, and completely free!
        </p>

        <button
          onClick={handleOpenModal}
          className="open-registration-modal-button"
        >
          Register Now
        </button>

        <div className="terms-info">
          <h3>Why Register?</h3>
          <ul>
            <li>Access personalized dashboards.</li>
            <li>Receive important updates and newsletters.</li>
            <li>Participate in discussions and forums.</li>
            <li>Get early access to new features.</li>
          </ul>
          <p>
            By clicking "Register Now", you agree to our{" "}
            <a href="/terms" className="terms-link">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/privacy" className="terms-link">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default Registration;
