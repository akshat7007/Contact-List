import React, { Fragment } from "react";
import "../component/Contacts.css";

const Contacts = () => {
  return (
    <Fragment className="test">
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/1-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">George Bluth</h4>
      </div>
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/2-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">Janet Weaver</h4>
      </div>
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/3-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">Emma Wong</h4>
      </div>
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/4-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">Eve Holt</h4>
      </div>
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/5-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">Charles Morris</h4>
      </div>
      <div className="contact-box">
        <img
          src="https://reqres.in/img/faces/6-image.jpg"
          alt="OOPS"
          className="image"
        />
        <h4 className="name">Tracey Ramos</h4>
      </div>
    </Fragment>
  );
};

export default Contacts;
