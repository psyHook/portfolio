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
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
            />
            <input
              type="text"
              id="phone"
              className="form-control"
              placeholder="Phone Number"
              name="phone"
            />
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
            />
            <input
              id="subject"
              type="text"
              className="form-control"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <textarea
              id="description"
              type="text"
              className="form-control"
              placeholder="Email"
              name="email"
            ></textarea>
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
