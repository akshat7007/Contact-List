import React, { Fragment, useEffect, useState } from "react";
import { showContactData } from "../../store/slice/contactSlice";
import { useSelector, useDispatch } from "react-redux";
import "../contact/Contacts.css";

const Contacts = () => {
  let [displayUser, setDisplayUser] = useState([]);
  const contact = useSelector((state) => state.contact);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch(`https://reqres.in/api/users`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          dispatch(showContactData(json.data));
        }
      });
  }, [dispatch]);

  const onSearchHandler = (search) => {
    if (search !== "") {
      const results = contact.contact.filter((user) => {
        return (
          user.first_name.toLowerCase().startsWith(search.toLowerCase()) ||
          user.last_name.toLowerCase().startsWith(search.toLowerCase())
        );
      });
      setDisplayUser(results);
      console.log(results);
    } else {
      setDisplayUser(contact);
    }
  };

  return (
    <Fragment>

      <div className="search">
        <input
          placeholder="Search Contact"
          onChange={(e) => {
            onSearchHandler(e.target.value);
          }}
        ></input>
      </div>

      <div className="contact-box">
        {contact.contact.map((data, index) => {
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
