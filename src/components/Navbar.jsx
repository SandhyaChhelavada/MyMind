import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-absolute w-100 z-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-white" href="#">My Mind</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/timelineAbout">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/resume">Resume</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/skills">Skills</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
