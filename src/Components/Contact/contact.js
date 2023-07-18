import React from "react";
import "./contac.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact-body" id="contact">
        <h1 className="contentheading">
          Stay connected with <b className="logo"> " Lens Vally " </b> to get
          exciting offers
        </h1>
        <div className="middle-part">
          <div className="form-group">
            <div class="form-group1">
              <label for="name">Firstname:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-group1">
              <label for="name">Secondname:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-group2">
              <label for="name">Email:</label>
              <input type="email" id="name" name="name" />
            </div>
            <div class="form-group3">
              <label for="name">Mobile Number:</label>
              <input type="text" id="name" name="name" />
            </div>
          </div>
          <p>By clicking Sign Up, you are opting to receive promotional, educational, e-commerce and product registration emails from Nikon Inc. You can update your preferences or unsubscribe any time.</p>
          <button type="submit" className="submit-btn1">Submit</button>
        </div>

        <ul className="social-media">
            <li><i className="fab fa-instagram"></i></li>
            <li><i className="fab fa-facebook"></i></li>
            <li><i className="fab fa-twitter"></i></li>
        </ul>

        <div className="lower-part">
            <h1>Submit the queries here</h1>
          <div className="form-group">
            <div class="form-group1">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div class="form-group2">
              <label for="name">Email:</label>
              <input type="email" id="name" name="name" />
            </div>
            <div class="form-group3">
              <label for="name">Queries:</label>
              <textarea><input type="text" id="name" name="name" /></textarea>
            </div>
          </div>
          <button type="submit" className="submit-btn2">Submit</button>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
