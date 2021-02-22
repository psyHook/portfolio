import React from "react";

const Experience = () => {
  return (
    <>
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Education</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Computer Engineering Mention System Development</h3>
              <h4 className="fw-bolder fs-3">
                AIEP Professional Institute - Rancagua (2015 - 2019)
              </h4>
              <p>
                able to operate with current market IT methodologies and tools,
                performing systems analysis, formulation, evaluation and
                maintenance of IT projects
              </p>
            </div>
          </div>
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Full Stack Web Developer </h3>
              <h4 className="fw-bolder fs-3">Soy HENRY (2020)</h4>
              <p>
                4-month bootcamp full-time modality, theory and practice +
                laboratory remote.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="experience" className="experience">
        <div className="d-flex justify-content-center my-5">
          <h1>Experiece</h1>
        </div>
        <div className="container experience-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h3>Web Developer</h3>
              <h4 className="fw-bolder fs-3">April To June - Digital5.cl (2019)</h4>
              <p>
                Development, implementation and maintenance of websites
                according to customer requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
