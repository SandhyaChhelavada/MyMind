import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';

const ResumeModal = () => {
  return (
    <>
      <h2 className="gradient-text text-center">Sandhya Chhelavada</h2>
      <h5 className="text-info text-center">Prompt Engineer | Vibe Coder</h5>

      <div className="contact-info text-center mb-4">
        <p>
          <FaEnvelope /> schhelavadawork@gmail.com &nbsp;
          <FaMapMarkerAlt /> Rajkot, India
        </p>
        <p>
          <FaLinkedin /> linkedin.com/in/sandhyachhelavada &nbsp;
          <FaGithub /> github.com/sandhyachhelavada
        </p>
      </div>

      <hr />

      {/* Professional Summary */}
      <section>
        <h5 className="section-title">Professional Summary</h5>
        <p>
          Aspiring <strong>AI Prompt Engineer</strong> and <strong>Vibe Coder</strong> 
          passionate about building innovative AI-driven solutions. Skilled in 
          designing effective prompts, creative coding, and delivering freelance 
          projects that combine technology with aesthetics. Dedicated to learning, 
          experimenting, and contributing to the future of AI communication.
        </p>
      </section>

      {/* Projects / Freelance Work */}
      <section>
        <h5 className="section-title">Projects & Freelance Work</h5>
        <div className="job-block">
          <h6><strong>Prompt Bank (React + Bootstrap)</strong></h6>
          <p className="text-info">Personal Project</p>
          <ul>
            <li>Created a web-based prompt storage and preview system using React & Bootstrap.</li>
            <li>Integrated free database for live data showcase on GitHub Pages.</li>
          </ul>
        </div>
        {/* <div className="job-block">
          <h6><strong>AI Image Generation Portfolio</strong></h6>
          <p className="text-info">Freelance Work</p>
          <ul>
            <li>Designed and showcased 50+ custom AI art & prompt-based visuals.</li>
            <li>Used DALL·E and Midjourney for aesthetic design projects.</li>
          </ul>
        </div> */}
        <div className="job-block">
          <h6><strong>Freelance Social Media Content</strong></h6>
          <p className="text-info">Client Projects</p>
          <ul>
            <li>Delivered AI-inspired content and creative prompt-based posts for clients.</li>
            <li>Focused on aesthetic + coding blend (Vibe Coding).</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h5 className="section-title">Core Skills</h5>
        <Row>
          <Col sm={6}>
            <ul>
              <li>Prompt Engineering</li>
              <li>Vibe Coding (Creative Coding + AI)</li>
              <li>LLMs: GPT, Claude, Gemini</li>
            </ul>
          </Col>
          <Col sm={6}>
            <ul>
              <li>Python, JavaScript</li>
              <li>React, Bootstrap</li>
              <li>DALL·E, Midjourney</li>
            </ul>
          </Col>
        </Row>
      </section>

      {/* Achievements */}
      <section>
        <h5 className="section-title">Highlights</h5>
        <ul>
          <li>Built multiple AI + coding based personal projects.</li>
          <li>Freelanced for clients in digital & AI-based content.</li>
          <li>Active learner exploring advanced Prompt Engineering techniques.</li>
        </ul>
      </section>

      <div className="text-center mt-4">
        <Button className="btn-gradient me-2">
          <FaDownload className="me-1" /> Download PDF
        </Button>
      </div>
    </>
  );
};

export default ResumeModal;
