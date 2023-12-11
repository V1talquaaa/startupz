import React from "react";
import { useState } from "react";

export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name*"
        className="formInput"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        className="formInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="20"
        className="formInput"
        placeholder="Message*"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <button type="submit" className="formBtn">
        Shoot us a message
      </button>
    </form>
  );
};
