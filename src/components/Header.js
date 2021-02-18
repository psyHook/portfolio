import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div id="home" className="main-info">
        <h1>Web development and websites promotions</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Mern Stack", "Fullstack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link className="btn-main-offer" offset={-50} smooth={true} to="contacts">
          Contáctame
        </Link>
      </div>
    </div>
  );
};

export default Header;
