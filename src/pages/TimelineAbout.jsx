import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import AOS from "aos";
import mymind from '../assets/images/My Mind.png';

export default function TimelineAbout() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className=" py-5 px-3 px-md-5 text-white bg-dark">

      {/* WHO AM I */}
      <div className="row align-items-center mb-5" data-aos="fade-up">
        <div className="col-lg-6">
          <img
            src={mymind}
            alt="Sandhya Chhelavada"
            className="img-fluid rounded-4 shadow"
          />
        </div>
        <div className="col-lg-6">
          <h2 className="text-warning fw-bold mb-3">WHO AM I?</h2>
          <p>Hi, I’m <strong>Sandhya</strong> — a passionate, self-taught <strong>Prompt Engineer</strong> from India with a curious mind and a heart full of logic, language, and innovation.</p>

          <p>My journey began with a simple question:
            <em>“How does ChatGPT understand what I ask?”</em></p>

          <p>That one question sparked a fire. From crafting <strong>creative social media content</strong> to mastering the <strong>mechanics of prompts</strong>, I’ve transformed curiosity into capability — and passion into purpose.</p>

          <p>Today, I specialize in designing <strong>powerful, precise, and human-centered prompts</strong> that bridge the gap between humans and AI.</p>

          <p>I don’t just write prompts — <em>I speak the language of machines to reflect the voice of people.</em></p>

          <ul>
            <li>🔧 I decode how AI thinks.</li>
            <li>🧠 I craft logic with empathy.</li>
            <li>💡 I make machines respond with meaning.</li>
          </ul>

          <p><strong>I’m Sandhya.</strong>
            <strong>I build conversations between minds and machines.</strong>
            <strong>I am a Prompt Engineer.</strong></p>


        </div>
      </div>

      {/* EXPERIENCE */}
      <div className="row text-center mt-5">
        <div className="col-4">
          <h4 className="text" style={{ color: "#7d00ff" }}>10+</h4>
          <small className="text-secondary">Projects Completed</small>
        </div>
        <div className="col-4">
          <h4 className="text" style={{ color: "#7d00ff" }}>1+</h4>
          <small className="text-secondary">Years Experience</small>
        </div>
        <div className="col-4">
          <h4 className="text" style={{ color: "#7d00ff" }}>2%</h4>
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
            "Prompt Writing",
            "AI Tool Integration",
            "Automation via Prompts",
          ].map((skill, i) => (
            <div key={i} className="col">
              <div className="bg-black p-3 rounded text-center h-100 border border-secondary">
                {skill}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔧 TOOLS I USE */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="text-warning fw-bold mb-3">🧰 Tools I Use</h3>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3">
          {[
            { name: "ChatGPT", icon: "bi-chat-dots" },
            { name: "Claude AI", icon: "bi-lightbulb" },
            { name: "Google Gemini", icon: "bi-google" },
            { name: "Midjourney", icon: "bi-brush" },
            { name: "DALL·E 3", icon: "bi-image" },
            { name: "Leonardo AI", icon: "bi-palette" },
            { name: "GitHub Copilot", icon: "bi-github" },
            { name: "Notion AI", icon: "bi-journal-text" },
            { name: "Canva AI", icon: "bi-easel2" },
            { name: "Pika Labs", icon: "bi-camera-reels" },
            { name: "RunwayML", icon: "bi-film" },
            { name: "Perplexity AI", icon: "bi-search" },
          ].map((tool, i) => (
            <div key={i} className="col">
              <div className="bg-black p-3 rounded text-center h-100 border border-secondary">
                <i className={`bi ${tool.icon} me-2`} style={{ color: "#7d00ff" }}></i>
                {tool.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACHIEVEMENTS */}
      <div className="mb-5" data-aos="fade-up">
        <h3 className="text-warning fw-bold mb-4">Achievements</h3>
        <div className="border-start border-3 ps-3 ms-2 timeline">
          {[
            "🏆 Completed 30-day Prompt Engineering Challenge",
            "📜 Built a Prompt Bank with 100+ niche-specific prompts",
            "💼 Created client-winning prompts for digital marketing campaigns",
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
