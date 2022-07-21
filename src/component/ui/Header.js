import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Contacts from "../contact/Contacts";
import "../ui/Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div>
          <NavDropdown
            className="dropdown"
            id="nav-dropdown-dark-example"
            title="All"
            menuVariant="dark"
          ></NavDropdown>
        </div>
        <div>
          <input placeholder="Search Contact"></input>
        </div>
      </header>
      <div>
        <Contacts/>

      </div>
     
    </div>
  );
};

export default Header;
