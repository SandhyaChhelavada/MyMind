import React, { useState } from 'react';
// import "../assets/style.css";
import About from "../pages/About";
import Resume from "../pages/Resume";
import Skills from "../pages/Skills";
import {
    FaHome, FaUser, FaFileAlt, FaImages, FaServicestack, FaEnvelope, FaFacebookF, FaInstagram, FaSkype, FaLinkedinIn, FaBars, FaTimes
} from 'react-icons/fa';
import yourImage from '../assets/images/homeimg.png';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app d-flex flex-row m-0 p-0" style={{ overflowX: 'hidden' }}>
            <aside className={`sidebar ${menuOpen ? 'open' : ''}`} style={{ minWidth: '250px', maxWidth: '250px', height: '100vh' }}>
                <div className="nav-toggle d-md-none" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <nav>
                    <ul>
                        <h1 style={{ color: '#f2d8e0', fontSize: '2rem' }}>MyMind</h1>
                        <li><FaHome /> Home</li>
                        <li><FaUser /> About</li>
                        <li><FaFileAlt /> Resume</li>
                        <li><FaImages /> Portfolio</li>
                        <li><FaServicestack /> Services</li>
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

            <main className="flex-grow-1 p-0 m-0">
                <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light p-0 m-0">
                    <img
                        src={yourImage}
                        alt="Main Visual"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: "90%", maxWidth: "90%" }}
                    />
                </div>

                <section className="home px-3 px-md-5" id="home">
                    <h1><span className="highlight">My</span>Mind</h1>
                    <h2>Sandhya Chhelavada</h2>
                    <h3>I'm a <span className="highlight-underline">Creative Director|</span></h3>
                    <p>
                        I turn ideas into intelligent solutions with the power of AI & Code. I don’t just prompt AI… I <strong>whisper intelligence into it.</strong> 🤯
                    </p>
                    <p>
                        "Turning thoughts into tools. Turning prompts into power. 🚀"
                        "I build brains with code & command. 🧠💻"
                    </p>

                    <div className="btn-group">
                        <button className="btn-filled">View My Work</button>
                        <button className="btn-outline">Let's Work Together</button>
                    </div>
                </section>

                <About />
                <Resume />
                <Skills />
            </main>
        </div>
    );
}

export default Home;