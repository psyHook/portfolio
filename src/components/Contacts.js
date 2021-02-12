import React from "react";
import emailjs from "emailjs-com";

const Contacts = () => {
  const serviceID = "service_ID";
  const templateID = "template_ID";
  const userID = "user_DhzYeUnQyYTcFRK5fnKie";

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

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
        <form onSubmit={sendEmail}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  autocomplete="off"
                />
                <div className="line"></div>
              </div>
              <span className="error-message"></span>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                  name="phone"
                  autocomplete="off"
                />
                <div className="line"></div>
              </div>
              <span className="error-message"></span>
              <div className="text-center">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  autocomplete="off"
                />
                <div className="line"></div>
              </div>
              <span className="error-message"></span>
              <div className="text-center">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  autocomplete="off"
                />
                <div className="line"></div>
              </div>
              <span className="error-message"></span>
            </div>
            <div className="col-md-6 col-xs-12">
              <div className="text-center">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Please describe shortly you project..."
                  name="description"
                  autocomplete="off"
                ></textarea>
                <div className="line"></div>
              </div>
              <button className="btn-main-offer contact-btn" type="submit">
                Contact me
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
