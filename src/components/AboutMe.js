import React from "react";
import Author from "../assets/yo.jpg";
import Logo from "../assets/mern.png";

const AboutMe = () => {
  return (
    <div id="aboutme" className="container py-5 aboutme">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img
              className="img-fluid profile-img"
              src={Author}
              alt="Hello stranger.."
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12 about-p">
          <h1 className="title-about">About me</h1>
          <p className="fs-2">
            Hello, my name is Juan Galarce and I am a computer engineer and
            Fullstack Developer Javascript, I am 31 years old and passionate
            about learning and technology, self-taught, responsible and eager to
            continue growing as a professional. I currently work with MERN
            Stack.
          </p>
          <img className="mern-image" src={Logo} alt="MERN STACK" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
