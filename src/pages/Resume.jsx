import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css";

const Resume = () => {
  return (
    <section className="resume-section text-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold border-title text-bold">Resume</h2>
        <p className="text-center text-muted mb-4">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos cupiditate.
        </p>

        <div className="text-center mb-5">
          <a
            href="/assets/resume.pdf"
            download
            className="btn btn-warning btn-lg fw-bold px-4"
          >
            <i className="bi bi-download me-2"></i>
            Download Resume
          </a>
        </div>

        <div className="row g-4">
          {/* LEFT COLUMN */}
          <div className="col-lg-4">
            <div className="bg-dark p-4 rounded shadow">
              <img
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
                alt="profile"
                className="img-fluid rounded mb-3"
              />
              <h5 className="fw-bold">Professional Summary</h5>
              <p>
                Driven software architect with expertise in developing scalable, high-performance enterprise
                solutions. Passionate about leveraging cutting-edge technologies.
              </p>

              <h6 className="mt-4 fw-bold">Contact Information</h6>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>Rajkot, Gujarat
                </li>
                <li>
                  <i className="bi bi-envelope-fill text-warning me-2"></i>schhelavadawork@gmail.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill text-warning me-2"></i>6351804604
                </li>
                <li>
                  <i className="bi bi-linkedin text-warning me-2"></i>linkedin.com/in/example
                </li>
              </ul>

              <h6 className="mt-4 fw-bold">Technical Skills</h6>
              <div className="mb-2">
                <span>Prompt Enginayar</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>95%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>Web Development</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>85%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>Image Creater</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>90%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>Python Devloper</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "80%" }}>80%</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-lg-8">
            <div className="bg-dark p-4 rounded shadow">
              <h4 className="fw-bold">
                <i className="bi bi-briefcase-fill text-warning me-2"></i>
                Professional Experience
              </h4>

              <div className="mt-4">
                <h5 className="fw-bold">Web Designer</h5>
                <span className="text-warning">2024 - 2025</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>Coding Bnadar</p>
                <ul>
                  <li>Lead enterprise-scale architecture design</li>
                  <li>Mentor team of 12 developers</li>
                  <li>Adopt microservices & cloud-native solutions</li>
                  <li>Reduced downtime by 75%</li>
                </ul>
              </div>


              <h4 className="fw-bold mt-5">
                <i className="bi bi-mortarboard-fill text-warning me-2"></i>
                Education
              </h4>

              <div className="mt-3">
                <h5 className="fw-bold">Master of Science in IT</h5>
                <span className="text-warning">2023 - 2025</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>BhaktKavi Narsinh Mehta University</p>
                <p>Graduated with honors. Specialized in AI/ML.</p>
              </div>

              <div className="mt-3">
                <h5 className="fw-bold">Bachelor of Computer Aplication</h5>
                <span className="text-warning">2020 - 2023</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>Saurastra University</p>
                <p>Dean's List, led coding club.</p>
              </div>

              <h4 className="fw-bold mt-5">
                <i className="bi bi-patch-check-fill text-warning me-2"></i>
                Certifications
              </h4>
              <ul className="mt-3">
                <li>Prompt Enginyar - Great Lerning</li>
                <li>Graphice Cource - Samart Computer Acedmy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
