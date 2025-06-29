import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../assets/style.css";

const Resume = () => {
  return (
    <section className="resume-section text-white py-5">
      <div className="container">
        <h2 className="text-center fw-bold border-title">Resume</h2>
        <p className="text-center text-muted mb-5">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos cupiditate.
        </p>

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
                  <i className="bi bi-geo-alt-fill text-warning me-2"></i>742 Evergreen Terrace, Springfield, MA 02101
                </li>
                <li>
                  <i className="bi bi-envelope-fill text-warning me-2"></i>contact@example.com
                </li>
                <li>
                  <i className="bi bi-telephone-fill text-warning me-2"></i>+1 (555) 123-4567
                </li>
                <li>
                  <i className="bi bi-linkedin text-warning me-2"></i>linkedin.com/in/example
                </li>
              </ul>

              <h6 className="mt-4 fw-bold">Technical Skills</h6>
              <div className="mb-2">
                <span>Web Development</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "95%" }}>95%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>UI/UX Design</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "85%" }}>85%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>Cloud Architecture</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: "90%" }}>90%</div>
                </div>
              </div>
              <div className="mb-2">
                <span>Project Management</span>
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
                <h5 className="fw-bold">Senior Software Architect</h5>
                <span className="text-warning">2022 - Present</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>Tech Innovations Inc.</p>
                <ul>
                  <li>Lead enterprise-scale architecture design</li>
                  <li>Mentor team of 12 developers</li>
                  <li>Adopt microservices & cloud-native solutions</li>
                  <li>Reduced downtime by 75%</li>
                </ul>
              </div>

              <div className="mt-4">
                <h5 className="fw-bold">Lead Developer</h5>
                <span className="text-warning">2019 - 2022</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>Digital Solutions Corp.</p>
                <ul>
                  <li>CI/CD implementation, 60% faster deployment</li>
                  <li>Team management across 8 projects</li>
                  <li>Raised test coverage from 45% to 90%</li>
                </ul>
              </div>

              <h4 className="fw-bold mt-5">
                <i className="bi bi-mortarboard-fill text-warning me-2"></i>
                Education
              </h4>

              <div className="mt-3">
                <h5 className="fw-bold">Master of Science in CS</h5>
                <span className="text-warning">2017 - 2019</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>Stanford University</p>
                <p>Graduated with honors. Specialized in AI/ML.</p>
              </div>

              <div className="mt-3">
                <h5 className="fw-bold">Bachelor of Science in Software Engineering</h5>
                <span className="text-warning">2013 - 2017</span>
                <p className="mb-1"><i className="bi bi-building me-2"></i>MIT</p>
                <p>Dean's List, led coding club.</p>
              </div>

              <h4 className="fw-bold mt-5">
                <i className="bi bi-patch-check-fill text-warning me-2"></i>
                Certifications
              </h4>
              <ul className="mt-3">
                <li>AWS Certified Solutions Architect – Professional</li>
                <li>Google Cloud Professional Cloud Architect</li>
                <li>Certified Kubernetes Administrator (CKA)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;