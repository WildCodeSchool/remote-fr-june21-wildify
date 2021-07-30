import React, { useState } from "react";
import './Contact.css';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submit = (e) => {
        e.preventDefault();
        const formValid =
          name.length > 0 &&
          /(.+)@(.+){2,}.(.+){2,}/.test(email) &&
          message.length > 0;
        if (!formValid) {
          return;
        }
        if (!localStorage.getItem("messages")) {
          localStorage.setItem("messages", JSON.stringify([]));
        }
        const messages = JSON.parse(localStorage.getItem("messages"));
        messages.push({
          name,
          email,
          message
        });
        localStorage.setItem("messages", JSON.stringify(messages));
      };
      const onReset = () => {
        setName("");
        setEmail("");
        setMessage("");
      };
      return (
        <div>
          <form className="form-container" onSubmit={submit} onReset={onReset}>
            <h1 className="form-h1">Formulaire de contact @Wildify</h1>
            <div className="form-label">
              <label className="form-title">Name</label>
              <input className="form-input"
              value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-label">
              <label className="form-title">@Email</label>
              <input className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-label">
              <label className="form-title">Message</label>
              <textarea className="text-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div classname="button-container">
                <button className="button-contact" type="submit">submit</button>
                <button className="button-contact" type="reset">reset</button>
            </div>
          </form>
        </div>
      );
    }

export default Contact;

