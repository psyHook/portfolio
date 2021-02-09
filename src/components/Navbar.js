import React, { Fragment } from "react";
import Logo from "../assets/img/logo.png";

// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#!">
            <img src={Logo} alt="logo"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  About me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
