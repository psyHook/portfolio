import React from "react";
import Author from "../assets/yo.jpg";

const AboutMe = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="img-fluid profile-img" src={Author} alt="Hello stranger.." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="title-about">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            sequi harum quaerat officia quos, perspiciatis vel amet doloribus
            incidunt dolorem alias veritatis? Fuga quidem vitae saepe id quasi
            consequatur laborum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Magni sequi harum quaerat officia quos,
            perspiciatis vel amet doloribus incidunt dolorem alias veritatis?
            Fuga quidem vitae saepe id quasi consequatur laborum!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
