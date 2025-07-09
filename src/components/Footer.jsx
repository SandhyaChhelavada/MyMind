import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-5 pb-4 mt-5">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">My Mind</h5>
            <p>
              Empowering digital innovation with scalable, secure, and smart engineering.
              Let's build the future with creativity and code.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Explore</h5>
            <p><a href="#" className="text-white text-decoration-none">Home</a></p>
            <p><a href="#" className="text-white text-decoration-none">Portfolio</a></p>
            <p><a href="#" className="text-white text-decoration-none">Projects</a></p>
            <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Resources</h5>
            <p><a href="#" className="text-white text-decoration-none">Blog</a></p>
            <p><a href="#" className="text-white text-decoration-none">Docs</a></p>
            <p><a href="#" className="text-white text-decoration-none">Changelog</a></p>
            <p><a href="#" className="text-white text-decoration-none">Support</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Connect</h5>
            <p>Gondal, Gujarat, India</p>
            <p>schhelavadawork@gmail.com</p>
            <p>+91 6351804604</p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-center text-md-left mb-0">
              &copy; {new Date().getFullYear()} Created with 💡 by <strong>Sandhya Chhelavada</strong>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white">
                    <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
