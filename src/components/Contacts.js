import React from "react";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="text-center">
        <h1>contact me</h1>
        <p>
          Please fill out the form and describe tu project need and I'll contact
          you soon as possible.
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
            </span>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
            </span>
            <div className="text-center">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
            </span>
            <div className="text-center">
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
              />
              <div className="line"></div>
            </div>
            <span className="error-message">
            </span>
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="text-center">
              <textarea
                type="text"
                className="form-control"
                placeholder="Please describe shortly you project..."
                name="description"
              ></textarea>
              <div className="line"></div>
            </div>
            <button className="btn-main-offer contact-btn" type="submit">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
