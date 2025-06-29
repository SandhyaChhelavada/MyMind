// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <main className="flex-grow-1 ms-5" style={{ paddingLeft: "260px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
