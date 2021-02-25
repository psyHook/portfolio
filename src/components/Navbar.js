import React, { Fragment } from "react";
import Logo from "../assets/mega-bola.png";
import { Link } from "react-scroll";

// React fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link
            className="navbar-brand nav-link"
            to="home"
            offset={-95}
            smooth={true}
          >
            <img className="logo-image" src={Logo} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link
                  smooth={true}
                  to="home"
                  className="nav-link"
                  offset={-95}
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <Link
                  className="nav-link"
                  offset={-95}
                  smooth={"easeOutQuad"}
                  to="aboutme"
                >
                  About me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  offset={-95}
                  smooth={true}
                  to="experience"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Education & Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  offset={-95}
                  smooth={true}
                  to="portfolio"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                >
                  Portfolio
                </Link>
              </li>
              <li
                className="nav-item"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <Link
                  className="nav-link"
                  offset={-50}
                  smooth={true}
                  to="contacts"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
