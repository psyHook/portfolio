import React from "react";
import TextLoop from "react-text-loop";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div id="home" className="main-info">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner text-left">
                <span className="title-h">Hello World</span>
                <h3 className="title">
                  <span className="title-2">Hi, I’m Juan Galarce</span>
                  <br />
                  <TextLoop>
                    <span> Fullstack Javascript.</span>
                    <span> Web Design.</span>
                    <span> Master Pokemon.</span>
                  </TextLoop>
                </h3>
                <h2 className="title-based">based in Chile.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
