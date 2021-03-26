import React from "react";
import Clima from "../assets/img/clima.jpg";
import Buscador from "../assets/img/buscador.jpg";

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
// REACT ICONS
import { FaGithub , FaPlay} from "react-icons/fa";

import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <div className="row text-center">
          <div className="col-12">
            <img
              className="portfolio-image-popupbox"
              src={Clima}
              alt="Netflix Clone Project..."
            />
            <p className="mt-3">
              Application created with React (Hooks), to find the climate of
              your city.
            </p>
          </div>
          <div className="col-12  col-lg-6">
            <h5>Github</h5>
            <h2>
              <FaGithub
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/psyHook/administrador-de-pacientes"
                  )
                }
              />
            </h2>
          </div>
          <div className="col-12  col-lg-6">
            <h5>Demo</h5>
            <h2>
              <FaPlay
                style={{ cursor: "pointer", color: '#9e00ff' }}
                onClick={() =>
                  window.open("https://climapp-react-hook.netlify.app/")
                }
              />
            </h2>
          </div>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Meow2!",
        },
        fadeIn: true,
        fadeInSpeed: 500,
      },
    });
  };

  // Proyecto Dos
  const openPopupboxTwo = () => {
    const content = (
      <>
        <div className="row text-center">
          <div className="col-12">
            <img
              className="portfolio-image-popupbox"
              src={Buscador}
              alt="Netflix Clone Project..."
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
              cumque illo est expedita quos adipisci suscipit unde itaque qui
              perferendis.
            </p>
          </div>
          <div className="col-12  col-lg-6">
            <h5>Github</h5>
            <h2>
              <FaGithub
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://github.com/psyHook/administrador-de-pacientes"
                  )
                }
              />
            </h2>
          </div>
          <div className="col-12  col-lg-6">
            <h5>Demo</h5>
            <h2>
              <FaGithub
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://climapp-react-hook.netlify.app/")
                }
              />
            </h2>
          </div>
        </div>
      </>
    );
    PopupboxManager.open({
      content,
      config: {
        titleBar: {
          enable: true,
          text: "Meow3!",
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
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img
              className="portfolio-image"
              src={Clima}
              alt="Netflix Clone Project..."
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          <div className="portfolio-image-box" onClick={openPopupboxTwo}>
            <img
              className="portfolio-image"
              src={Buscador}
              alt="Netflix Clone Project..."
            />
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
