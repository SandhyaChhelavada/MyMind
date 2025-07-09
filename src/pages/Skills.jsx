// File: src/components/SkillsSection.jsx

import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Prompt from "../components/Prompt";

const SkillBar = ({ title, level, description }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="mb-4"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="d-flex justify-content-between">
        <strong className="text-white">{title}</strong>
        <span className="text-white">{level}%</span>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${level}%`,
            backgroundColor: "#a67c52",
            transition: "width 1s ease-in-out",
          }}
        ></div>
      </div>
      {visible && description && (
        <small className="text-muted d-block mt-1 fade-in">{description}</small>
      )}
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="py-5" style={{ backgroundColor: "#111" }}>
      <div className="container" data-aos="fade-up">
        <div className="text-center text-white mb-5">
          <h2 className="fw-bold">
            <span style={{ borderBottom: "3px solid #a67c52" }}>Skills</span>
          </h2>
          <p className="text-muted">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="bg-dark p-4 rounded shadow" data-aos="fade-right">
              <h4 className="text-white mb-4">Front-end Development</h4>
              <SkillBar title="HTML/CSS" level={95} description="Mastery in HTML5 and modern CSS3 techniques." />
              <SkillBar title="JavaScript" level={85} description="Expert in ES6+, DOM, and browser APIs." />
              <SkillBar title="React" level={80} description="Hooks, component architecture, and state management." />
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-dark p-4 rounded shadow" data-aos="fade-left">
              <h4 className="text-white mb-4">Back-end Development</h4>
              <SkillBar title="Node.js" level={75} description="Built scalable REST APIs and real-time apps." />
              <SkillBar title="Python" level={70} description="Flask, automation, scripting tasks." />
              <SkillBar title="SQL" level={65} description="Joins, queries, and database normalization." />
            </div>
          </div>
        </div>
      
      </div>

      <style>{`
        .fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <br />
         <Prompt />
    </div>
  );
};

export default Skills;