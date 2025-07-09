import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";
import myImage from '../assets/images/myimage.png';

export default function AboutCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container-fluid px-3 px-md-5 py-5 overflow-hidden bg-light">
      <div className="row g-5 align-items-center">
        {/* Profile Card */}
        <div className="col-12 col-lg-5" data-aos="fade-right">
          <div className="card bg-dark text-white border-0 rounded-4 px-3 py-5 h-100">
            <div className="text-center">
              <img
                src={myImage}
                alt="Sandhya Chhelavada"
                className="rounded-circle"
                style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #7d00ff" }}
              />
            </div>
            <div className="text-center mt-3">
              <h5 className="fw-bold">Sandhya Chhelavada</h5>
              <p className="mb-2" style={{ color: "#7d00ff" }}>Prompt Engineer & Python Developer</p>
            </div>
            <div className="d-grid gap-2 px-3">
              <div className="btn btn-outline-light text-start">
                <i className="bi bi-envelope me-2"></i> schhelavadawork@gmail.com
              </div>
              <div className="btn btn-outline-light text-start">
                <i className="bi bi-telephone me-2"></i> +91 6351804604
              </div>
              <div className="btn btn-outline-light text-start">
                <i className="bi bi-geo-alt me-2"></i> Rajkot, Gujarat
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="col-12 col-lg-7" data-aos="fade-left">
          <button
            className="btn btn-secondary rounded-pill px-4 mb-4 fw-semibold"
            onClick={() => navigate("/timelineabout")}
          >
            Get to Know Me
          </button>
          <h2 className="fw-bold text-black">
            Powered by Code. Driven by Curiosity. Inspired by AI
          </h2>

          <p className="text-secondary mt-3">
            I'm Sandhya Chhelavada — a passionate Prompt Engineer & Python Developer.
            I build smart tools, design powerful prompts, and create tech that thinks.




          </p>
          <p className="text-secondary">
            From Gondal to GPT, my journey began with curiosity and grew into creativity with code.
            I mix AI with logic to solve real problems, one prompt at a time.
          </p>
          <p className="text-secondary">
            I don’t write code for fun. I write code that <strong>thinks</strong>.<br />
            I don’t use AI tools. I <strong>create smarter ones</strong>.
          </p>
          <p className="text-secondary">
            I’m Sandhya — and I’ve got a keyboard, a dream, and a deep passion for building things that matter.
          </p>


        </div>
      </div>
    </div>
  );
}
