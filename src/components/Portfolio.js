import React from "react";
import ProjectOne from "../assets/img/portfolio.png";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// React popupbox
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Project 1
  const openPopupboxProject = () => {
    const content = (
      <>
        <img
          src={ProjectOne}
          className="portfolio-image-popupbox"
          alt="project 1"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni
          eveniet.
        </p>
        <b>Github:</b>{" "}
        <a
          href="#!"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/psyHook/administrador-de-pacientes")
          }
        >
          https://github.com/psyHook/administrador-de-pacientes
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Project One",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Project 2
  const openPopupboxProjectTwo = () => {
    const content = (
      <>
        <img
          src={ProjectOne}
          className="portfolio-image-popupbox"
          alt="project 2"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni
          eveniet.
        </p>
        <b>Github:</b>
        <b>Demo:</b>
        <a
          href="#!"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/psyHook/administrador-de-pacientes")
          }
        >
          https://github.com/psyHook/administrador-de-pacientes
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Project Two",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Project 3
  const openPopupboxProjectThree = () => {
    const content = (
      <>
        <img
          src={ProjectOne}
          className="portfolio-image-popupbox"
          alt="project 2"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni
          eveniet.
        </p>
        <b>Github:</b>
        <b>Demo:</b>
        <a
          href="#!"
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/psyHook/administrador-de-pacientes")
          }
        >
          https://github.com/psyHook/administrador-de-pacientes
        </a>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Project Three",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

    // Project 3
    const openPopupboxProjectFour = () => {
      const content = (
        <>
          <img
            src={ProjectOne}
            className="portfolio-image-popupbox"
            alt="project 2"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni
            eveniet.
          </p>
          <b>Github:</b>
          <b>Demo:</b>
          <a
            href="#!"
            className="hyper-link"
            onClick={() =>
              window.open("https://github.com/psyHook/administrador-de-pacientes")
            }
          >
            https://github.com/psyHook/administrador-de-pacientes
          </a>
        </>
      );
      PopupboxManager.open({
        content,
        config: {
          titleBar: {
            enable: true,
            text: "Project Four",
          },
          fadeIn: true,
          fadeInSpeed: 500,
        },
      });
    };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxProject}>
            <img className="portfolio-image" src={ProjectOne} alt="project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProjectTwo}>
            <img className="portfolio-image" src={ProjectOne} alt="project 2" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProjectThree}>
            <img className="portfolio-image" src={ProjectOne} alt="project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxProjectFour}>
            <img className="portfolio-image" src={ProjectOne} alt="project" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer />
    </div>
  );
};

export default Portfolio;
