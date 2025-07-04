import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";

export default function TimelineAbout() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container py-5 px-3 px-md-5 text-white bg-dark">
      {/* WHO AM I */}
      <div className="row align-items-center mb-5" data-aos="fade-up">
        <div className="col-lg-6">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?fit=crop&w=800&q=80"
            alt="Sandhya Profile"
            className="img-fluid rounded-4 shadow"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-warning fw-bold mb-3">WHO AM I?</h2>
          <p>Hi, I’m <strong>Sandhya</strong> — a self-taught Prompt Engineer from India with a deep love for AI, words, and logic.</p>
          <p>It all started with a single question: <em>“How does ChatGPT understand what I ask?”</em></p>
          <p>That curiosity became my path. From a social media creative to exploring prompt mechanics, I’ve turned curiosity into a career.</p>
          <p>Now, I help machines understand humans better through powerful, precise prompts.</p>
        </div>
      </div>
       <div className="row text-center mt-5">
            <div className="col-4">
              <h4 className="text" style={{ color: " #7d00ff" }}>10+</h4>
              <small className="text-secondary">Projects Completed</small>
            </div>
            <div className="col-4">
              <h4 className="text" style={{ color: " #7d00ff" }}>1+</h4>
              <small className="text-secondary">Years Experience</small>
            </div>
            <div className="col-4">
              <h4 className="text" style={{ color: " #7d00ff" }}>2%</h4>
              <small className="text-secondary">Client Satisfaction</small>
            </div>
          </div>
          <br />

      {/* SKILLS */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="text-warning fw-bold mb-3">Skills</h3>
        <div className="row row-cols-2 row-cols-md-3 g-3">
          {[
            "🧠 Prompt Design",
            "🤖 ChatGPT Mastery",
            "📝 Few-shot/Zero-shot Prompts",
            "🗃️ Data Structuring",
            "🧩 Logical Thinking",
            "🪄 Creativity in AI Interactions",
            "🌐 Web Research",
            "🖼️ Image & Content Generation",
            "🎯 Client-focused Solutions",
          ].map((skill, i) => (
            <div key={i} className="col">
              <div className="bg-black p-3 rounded text-center h-100 border border-secondary">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      

      {/* ACHIEVEMENTS Timeline */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="text-warning fw-bold mb-4">Achievements</h3>
        <div className="border-start border-3 ps-3 ms-2 timeline">
          {[
            "🏆 Completed 30-day Prompt Engineering Challenge",
            "📜 Built a Prompt Bank with 100+ niche-specific prompts",
            "💼 Created client-winning prompts for digital marketing campaigns",
            "🚀 Finalist in “AI Prompt Hackathon”",
            "👩‍💻 Helped 20+ people learn prompt engineering basics",
          ].map((item, i) => (
            <div key={i} className="mb-3">
              <span className="text-light">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FUN FACTS */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="text-warning fw-bold mb-3">Fun Facts</h3>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
          {[
            "🎨 I design creative Instagram posts in my free time",
            "🧘‍♀️ Yoga is my daily reset button",
            "🎧 I build prompts better when lo-fi beats are on",
            "☕ Coffee + AI = My happy place",
            "🐦 I once wrote a viral tweet using a perfect prompt",
          ].map((fact, i) => (
            <div key={i} className="col">
              <div className="bg-black border border-secondary rounded p-3 h-100">
                {fact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
