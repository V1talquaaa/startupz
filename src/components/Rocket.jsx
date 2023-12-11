import React from "react";
import { Form } from "./ui/Form";

export const Rocket = () => {
  return (
    <section className="rocket" id="contact">
      <div className="container">
        <h2 className="rocketTitle">
          Are you ready <br /> to board this rocket ship?
        </h2>
        <p className="rocketText">Share your excitement with us.</p>
        <div className="">
          <Form />
        </div>
      </div>
    </section>
  );
};
