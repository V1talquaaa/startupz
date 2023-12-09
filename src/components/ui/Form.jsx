import React from "react";

export const Form = () => {
  return (
    <form className="form">
      <input
        type="text"
        name="name"
        placeholder="Name*"
        className="formInput"
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        className="formInput"
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="20"
        className="formInput"
        placeholder="Message*"
      ></textarea>
      <button type="button" className="formBtn">
        Shoot us a message
      </button>
    </form>
  );
};
