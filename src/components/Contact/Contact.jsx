
import React, { useState } from "react";

import './Contact.css';

const Contact = () => {
  
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