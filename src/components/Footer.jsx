import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-4 pb-3 mt-5">
      <div className="container text-center">
        {/* Social Icons Row */}
        <div className="d-flex justify-content-center gap-4 mb-3">

          <a
            href="https://www.linkedin.com/in/sandhya-chhelavada-675160309/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>

          <a
            href="https://www.instagram.com/mymind.codevibe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>

          <a
            href="https://github.com/SandhyaChhelavada"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white fs-5"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <hr className="border-secondary mb-3" />

        {/* Footer Note */}
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Created with ❤️ by <strong>Sandhya Chhelavada</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
