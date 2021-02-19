import React from "react";
import Typed from "react-typed";
import TextLoop from "react-text-loop";
import { Link } from "react-scroll";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Welcome to my World",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const Header = () => {
  return (
    <div className="header-wrapper">
      <div id="home" className="main-info">
        {SlideList.map((value, index) => (
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`inner  ${value.textPosition}`}>
                  {value.category ? <span className="title-h">{value.category}</span> : ""}
                  <h1 className="title">
                    Hi, I’m Juan Galarce <br />
                    <TextLoop>
                      <span> JS Developer.</span>
                      <span> Web Design.</span>
                      <span> Master Pokemon.</span>
                    </TextLoop>
                  </h1>
                  <h2 className="title-based">based in Chile.</h2>
                  {value.description ? (
                    <p className="description">{value.description}</p>
                  ) : (
                    ""
                  )}
                  {value.buttonText ? (
                    <div className="slide-btn">
                      <a
                        className="rn-button-style--2 btn-primary-color"
                        href={`${value.buttonLink}`}
                      >
                        {value.buttonText}
                      </a>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
