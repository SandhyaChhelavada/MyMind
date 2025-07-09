import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import yourImage from '../assets/images/homeimg.png';
import About from "../pages/About";
import Skills from "../pages/Skills";
import Resume from "../pages/Resume";
import Prompt from "../components/Prompt";
import Timeline from '../components/Timeline';


const words = [" Prompt Engineer", "Creator", "Coder", "AI Enthusiast", "Prompt Wizard"];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container-fluid p-0 m-0 position-relative">

      <img src={yourImage} alt="Main Visual" className="img-fluid w-100 vh-100 object-fit-cover" />

      <div className="glass-overlay d-flex justify-content-center align-items-center text-center">
        <section className="home px-3 px-md-5" id="home" data-aos="fade-up">
          <h1 className="display-4 fw-bold">Sandhya Chhelavada</h1>
          <h3>
            I'm a <span className="highlight-underline" style={{ color: "#7d00ff" }}>{words[wordIndex]}</span>
          </h3>
          <p className="lead">“Speak AI. Speak Success.”</p>
          <p className="mb-4">
            "Turning thoughts into tools. Turning prompts into power. 🚀"
            <br />"I build brains with code & command. 🧠💻"
          </p>
          <div className="btn-group">
            <button className="btn btn-light me-2">View My Work</button>
            <button className="btn btn-outline-light">Let's Work Together</button>
          </div>
        </section>
      </div>
      <About />
       <Prompt />
       <Timeline />
      {/* <Resume />
      <Skills /> */}
    </div>

  );
}
