import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css";

const About = () => {
  return (
    <div className="container py-5 text-white">
      <div className="row align-items-center">
        {/* Left Profile Card */}
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="profile-card shadow">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Marcus Thompson"
              className="profile-img"
            />
            <div className="profile-name">Marcus Thompson</div>
            <div className="profile-role">Creative Director & Developer</div>

            <div className="contact-box">
              <i className="bi bi-envelope-fill"></i> marcus@example.com
            </div>
            <div className="contact-box">
              <i className="bi bi-telephone-fill"></i> +1 (555) 123-4567
            </div>
            <div className="contact-box">
              <i className="bi bi-geo-alt-fill"></i> San Francisco, CA
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="col-md-8 right-side">
          <button className="btn btn-know mb-4">Get to Know Me</button>
          <h2>
            Passionate About Creating <br />
            Digital Experiences
          </h2>
          <p className="mt-3">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
          </p>

          <div className="row stats text-center">
            <div className="col-4">
              <h4>150+</h4>
              <small>Projects Completed</small>
            </div>
            <div className="col-4">
              <h4>5+</h4>
              <small>Years Experience</small>
            </div>
            <div className="col-4">
              <h4>98%</h4>
              <small>Client Satisfaction</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;