// src/components/Portfolio.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/style.css";

const categories = ["All Projects", "Photography", "Design", "Automotive", "Nature"];

const allProjects = [
  { id: 1, category: "Photography", image: "https://images.pexels.com/photos/450516/pexels-photo-450516.jpeg" },
  { id: 2, category: "Photography", image: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg" },
  { id: 3, category: "Design", image: "https://images.pexels.com/photos/2736834/pexels-photo-2736834.jpeg" },
  { id: 4, category: "Automotive", image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg" },
  { id: 5, category: "Nature", image: "https://images.pexels.com/photos/349758/pexels-photo-349758.jpeg" },
  { id: 6, category: "Design", image: "https://images.pexels.com/photos/804938/pexels-photo-804938.jpeg" },
  { id: 7, category: "Nature", image: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects =
    activeCategory === "All Projects"
      ? allProjects
      : allProjects.filter((proj) => proj.category === activeCategory);

  return (
    <section className="portfolio-section text-white py-5">
      <div className="container">
        <h2 className="text-center border-title fw-bold">Portfolio</h2>
        <p className="text-center text-muted mb-5">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur fuga eum quidem.
        </p>
        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <div className="sidebar rounded p-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn btn w-100 text-start mb-2 ${
                    activeCategory === cat ? "active" : ""
                  }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="col-md-9">
            <div className="row g-4">
              {filteredProjects.map((item) => (
                <div key={item.id} className="col-md-4 col-sm-6">
                  <div className="project-card">
                    <img src={item.image} alt="project" className="img-fluid rounded" />
                  </div>
                </div>
              ))}
              {filteredProjects.length === 0 && (
                <p className="text-center text-muted">No projects found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
