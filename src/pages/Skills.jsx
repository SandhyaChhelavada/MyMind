import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";
import { BsDownload, BsChatDots } from "react-icons/bs";
import { FaSmile, FaRegListAlt, FaHeadphones, FaUsers } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills-section text-white py-5">
      <div className="container">

        {/* Skills */}
        <h2 className="text-center mb-2 fw-bold text-white border-title">Skills</h2>
        <p className="text-center mb-5 text-muted">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>

        <div className="row g-4">
          {/* Front-end */}
          <div className="col-md-6">
            <div className="skill-box p-4 rounded">
              <h4 className="fw-bold">Front-end Development</h4>
              <div className="skill-item mt-4">
                <label>HTML/CSS</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>95%</div>
                </div>
              </div>
              <div className="skill-item mt-4">
                <label>JavaScript</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>85%</div>
                </div>
              </div>
              <div className="skill-item mt-4">
                <label>React</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}>80%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Back-end */}
          <div className="col-md-6">
            <div className="skill-box p-4 rounded">
              <h4 className="fw-bold">Back-end Development</h4>
              <div className="skill-item mt-4">
                <label>Node.js</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "75%" }}>75%</div>
                </div>
              </div>
              <div className="skill-item mt-4">
                <label>Python</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "70%" }}>70%</div>
                </div>
              </div>
              <div className="skill-item mt-4">
                <label>SQL</label>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "65%" }}>65%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Info */}
        <div className="row text-white mt-5 align-items-center">
          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Education</h6>
            <strong className="text-white">Computer Science, MIT</strong>
          </div>
          <div className="col-md-6 mb-3">
            <h6 className="text-muted">Languages</h6>
            <strong className="text-white">English, Spanish, French</strong>
          </div>
          <div className="col-md-12 d-flex gap-3 flex-wrap mt-3">
            <button className="btn btn-resume">
              <BsDownload className="me-2" />
              Download Resume
            </button>
            <button className="btn btn-outline-light">
              <BsChatDots className="me-2" />
              Let’s Talk
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="row text-center mt-5 g-4">
          <div className="col-6 col-md-3">
            <div className="stat-box">
              <FaSmile className="stat-icon text-warning" />
              <h3>232</h3>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box">
              <FaRegListAlt className="stat-icon text-orange" />
              <h3>521</h3>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box">
              <FaHeadphones className="stat-icon text-success" />
              <h3>1463</h3>
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="stat-box">
              <FaUsers className="stat-icon text-pink" />
              <h3>15</h3>
              <p>Hard Workers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;