import React, { useEffect, useState } from "react";
import '../App.css';

function Myprompt() {
  const [prompts, setPrompts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(2);

  useEffect(() => {
    fetch("https://sheetdb.io/api/v1/gsfuga7sbf5ot") // API URL from SheetDB
      .then((res) => res.json())
      .then((data) => setPrompts(data));
  }, []);

  // 🔹 Extract unique categories
  const categories = ["All", ...new Set(prompts.map((p) => p.category))];

  // 🔹 Filter prompts by category
  const filteredPrompts =
    selectedCategory === "All"
      ? prompts
      : prompts.filter((p) => p.category === selectedCategory);

  // 🔹 Handle show more
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 2); // 2 more prompts per click
  };

  return (
    <div className="app" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2 className="section-title">
            <span className="text-gradient"> My Prompt Bank</span>
          </h2>
      <h1></h1>

      {/* Category Buttons */}
      <div className="categories" style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(2); // reset count on category change
            }}
            style={{
              margin: "5px",
              padding: "8px 15px",
              borderRadius: "8px",
              border: "none",
              backgroundColor: selectedCategory === cat ? "#333" : "#666",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Prompt List */}
      <div className="prompt-list" style={{ display: "grid", gap: "15px" }}>
        {filteredPrompts.slice(0, visibleCount).map((p, index) => (
          <div
            key={index}
            className="prompt-card"
            style={{
              background: "#111",
              color: "#fff",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            <h2>{p.title}</h2>
            <p>
              <b>Category:</b> {p.category}
            </p>
            <p>{p.prompt}</p>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visibleCount < filteredPrompts.length && (
        <button
          onClick={handleShowMore}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Show More
        </button>
      )}
    </div>
  );
}

export default Myprompt;
