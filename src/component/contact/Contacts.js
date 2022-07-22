import React, { Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import "../contact/Contacts.css";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const showContactHandler = () => {
    dispatch({ type: 'showContact' });
  };
  
  return (
    <Fragment>
      
        <div className="contact-box">{contacts}</div>
   
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
      <Button onClick={showContactHandler} variant="dark">
        Show Contacts
      </Button>
    </Fragment>
  );
};

export default Contacts;
