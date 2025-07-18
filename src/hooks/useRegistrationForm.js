import { useState } from "react";

export const useRegistrationForm = (onClose) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    country: "",
    phoneNumber: "",
    knownLanguages: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        knownLanguages: checked
          ? [...prevData.knownLanguages, value]
          : prevData.knownLanguages.filter((lang) => lang !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const dataToSend = { ...formData };
    delete dataToSend.confirmPassword;

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Registration successful!");
        onClose();
      } else {
        alert("Registration failed!");
      }
    } catch (error) {
      alert("Error connecting to server!");
      console.error(error);
    }
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    setFormData,
  };
};
