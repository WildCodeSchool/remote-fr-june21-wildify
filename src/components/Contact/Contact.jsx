
import React, { useState } from "react";

import './Contact.css';

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="form-global">
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Contactez-nous</h1>
      <div className="form-container">
          <div>
        <label className="form-text" htmlFor="name">Name:</label>
        <input type="text" id="name" required />
          </div>
          <div>
        <label className="form-text" htmlFor="email">Email:</label>
        <input type="email" id="email" required />
          </div>
          <div>
        <label className="form-text" htmlFor="message">Message:</label>
        <textarea id="message" required />
          </div>
        <button type="submit">{status}</button>
      </div>
    </form>
  </div>
  );
};

export default Contact;