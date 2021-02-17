import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Chile - Región del Libertador General Bernardo O'Higgins</p>
            </div>
            <div className="d-flex">
              <a href="#!">+569-67668074</a>
            </div>
            <div className="d-flex">
              <p>j6alarce@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="#!" className="footer-nav">
                  Home
                </a>
                <br />
                <a href="#!" className="footer-nav">
                  About
                </a>
                <br />
                <a href="#!" className="footer-nav">
                  Services
                </a>
                <br />
              </div>
              <div className="col">
                <a href="#!" className="footer-nav">
                  Expience
                </a>
                <br />
                <a href="#!" className="footer-nav">
                  Portfolio
                </a>
                <br />
                <a href="#!" className="footer-nav">
                  Contact
                </a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/psyqore/"}
                quote={"My Portfolio 2020"}
                hashtag="#react"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.facebook.com/psyqore/"}
                quote={"My Portfolio 2020"}
                hashtag="#react"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={"https://www.facebook.com/psyqore/"}
                quote={"My Portfolio 2020"}
                hashtag="#react"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Juan Galarce | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
