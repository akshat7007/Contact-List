import React, { Fragment, useEffect, useState } from "react";
import { showContactData } from "../../store/slice/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import "../contact/Contacts.css";

const Contacts = () => {
  const contact = useSelector((state) => state.contact.contact);
  const [displayContact, setDisplayContact] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          dispatch(showContactData(data.data));
          setDisplayContact(data.data);
        }
      });
  }, [dispatch]);

  const searchContact = (search) => {
    const contactList = search;
    if (contactList !== "") {
      const filter = displayContact.filter((data) => {
        return (
          data.first_name.toLowerCase().startsWith(contactList.toLowerCase()) ||
          data.last_name.toLowerCase().startsWith(contactList.toLowerCase())
        );
      });
      setDisplayContact(filter)
    } else {
      setDisplayContact(contact)
    }
  };

  return (
    <Fragment>
      <div className="search">
        <input className="searchinput" type="text" placeholder="Search Contact" onChange={(e) => {
            searchContact(e.target.value,contact)
        }}></input>
      </div>

      <div className="contact-box">
        {displayContact.map((data, index) => {
          return (
            <div key={index} className="d-flex mb-4 contactBlock">
              <img src={data.avatar} alt="OOPS" className="image" />
              <h4 className="name">
                {data.first_name} {data.last_name}
              </h4>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Contacts;
