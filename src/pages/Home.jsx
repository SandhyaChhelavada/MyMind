import React, { useState } from 'react';
import "../assets/style.css";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import {
    FaHome, FaUser, FaFileAlt, FaImages, FaServicestack, FaEnvelope, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaBehance, FaDribbble, FaBars, FaTimes, FaChevronDown
} from 'react-icons/fa';
import yourImage from '../assets/images/homeimg.png';



function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app">
            <aside className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <div className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <nav>
                    <ul>
                        <li><FaHome /> Home</li>
                        <li><FaUser /> About</li>
                        <li><FaFileAlt /> Resume</li>
                        <li><FaImages /> Portfolio</li>
                        <li><FaServicestack /> Services</li>
                        <li><FaChevronDown /> Dropdown</li>
                        <li><FaEnvelope /> Contact</li>
                    </ul>
                </nav>
                <div className="social-icons">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaSkype />
                    <FaLinkedinIn />
                </div>
            </aside>

            <main>
                <div className="container text-center">

                    <div className="image-wrapper">
                        <img
                            src={yourImage} // ✅ use imported image
                            alt="My Work"
                            className="img-fluid rounded shadow"
                        />
                    </div>
                </div>
                <section className="home" id="home">
                    <h1><span className="highlight">Snap</span>Folio</h1>
                    <h2>Alexander Chen</h2>
                    <h3>I'm a <span className="highlight-underline">Creative Director|</span></h3>
                    <p>
                        Passionate about creating exceptional digital experiences that blend innovative design with functional development.
                        Let's bring your vision to life.
                    </p>
                    <div className="btn-group">
                        <button className="btn-filled">View My Work</button>
                        <button className="btn-outline">Get In Touch</button>
                    </div>
                    <div className="bottom-icons">
                        <FaDribbble />
                        <FaBehance />
                        <FaLinkedinIn />
                    </div>
                </section>

                <section className="about" id="about">
                    {/* <div className="photo">
            <img src={src} alt="Alexander Chen" />
          </div> */}
                </section>
                 <About />
                  {/* <Portfolio /> */}
                  <Resume />
                  <Skills />
            </main>
        </div>
    );
}

export default Home;