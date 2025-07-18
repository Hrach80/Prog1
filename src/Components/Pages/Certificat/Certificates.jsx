import React from "react";
import { useNavigate } from "react-router-dom";
import "../Certificat/Certificates.css"; // Համոզվեք, որ այս ճանապարհը ճիշտ է CSS ֆայլի համար

// Ներմուծում ենք միայն մեկ անգամ, քանի որ բոլոր սերտիֆիկատները նույն նկարն ունեն
import certificatePlaceholderImage from "../../images/sert1.jpg";
import certificatePlaceholderImage2 from "../../images/sert2.jpg";
import certificatePlaceholderImage3 from "../../images/sert3.jpg";

const Certificates = () => {
  const navigate = useNavigate();

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
      image: certificatePlaceholderImage2, // Օգտագործում ենք ներմուծված նկարը
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

  return (
    <div className="certificates-page">
      <button
        onClick={() => navigate("/About Mi")}
        className="certificates-back-btn"
      >
        Back to About Me
      </button>

      <h1 className="certificates-title">My Achievements & Certificates</h1>

      <div className="certificates-grid">
        {certificatesData.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-image"
            />
            <div className="certificate-info">
              <h2 className="certificate-card-title">{cert.title}</h2>
              <p className="certificate-issuer">Issued by: {cert.issuer}</p>
              <p className="certificate-date">Date: {cert.date}</p>
              <p className="certificate-description">{cert.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
