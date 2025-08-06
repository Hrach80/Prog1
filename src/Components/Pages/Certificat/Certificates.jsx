import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Certificat/Certificates.css"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import certificatePlaceholderImage from "../../images/sert1.jpg";
import certificatePlaceholderImage2 from "../../images/sert2.jpg";
import certificatePlaceholderImage3 from "../../images/sert3.jpg";

const Certificates = () => {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Ձեր սերտիֆիկատների տվյալները
  const certificatesData = [
    {
      id: 1,
      title: "Web Development Basics",
      issuer: "Online Learning Platform",
      date: "March 2023",
      image: certificatePlaceholderImage,
      description:
        "Completed a comprehensive course covering fundamental concepts of HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "React.js Mastery",
      issuer: "Advanced Tech Academy",
      date: "August 2023",
      image: certificatePlaceholderImage2, 
      description:
        "Achieved proficiency in building single-page applications with React, including hooks, state management, and routing.",
    },
    {
      id: 3,
      title: "Backend with Node.js",
      issuer: "Coding Skills Hub",
      date: "January 2024",
      image: certificatePlaceholderImage3, // Օգտագործում ենք ներմուծված նկարը
      description:
        "Gained expertise in server-side development using Node.js, Express, and MongoDB.",
    },
    // Ավելացրեք այլ սերտիֆիկատներ այստեղ
  ];

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage("");
  };

  return (
    <div className="certificates-page">
      <button onClick={() => navigate("/")} className="btnBec-scss">
        Back to About Me
      </button>

      <h1 className="certificates-title">My Achievements & Certificates</h1>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-image-container">
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
              <div
                className="view-icon-overlay"
                onClick={() => openModal(cert.image)}
              >
                <FontAwesomeIcon icon={faEye} className="view-icon" />
              </div>
            </div>
            <div className="certificate-info">
              <h2 className="certificate-card-title">{cert.title}</h2>
              <p className="certificate-issuer">Issued by: {cert.issuer}</p>
              <p className="certificate-date">Date: {cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close-btn" onClick={closeModal}>
              &times;
            </span>
            <img
              src={selectedImage}
              alt="Enlarged Certificate"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
