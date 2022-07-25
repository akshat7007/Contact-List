import React, { Fragment, useEffect, useState } from "react";
import { showContactData } from "../../store/slice/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import "../contact/Contacts.css";

const Contacts = () => {
  const [displayContact, setDisplayContact] = useState([]);
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          dispatch(showContactData(json.data));
        setDisplayContact([contact]);
        }
      });
  }, []);
  console.log(contact);

  return (
    <Fragment>
      <div className="contact-box">
        {displayContact.map((data, index) => {
          console.log(data);
          return (
            <div key={index}>
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
