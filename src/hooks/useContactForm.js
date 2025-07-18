import { useState, useRef, useEffect } from "react";

export const useContactForm = () => {
  const nameInputRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = {
      name: form.name,
      email: form.email,
      message: form.message,
    };

    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      alert("Error connecting to server.");
      console.error(error);
    }
  };

  const focusOnNameInput = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  return {
    form,
    handleChange,
    handleSubmit,
    nameInputRef,
    focusOnNameInput,
  };
};
