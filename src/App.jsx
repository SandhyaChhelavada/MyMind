import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import TimelineAbout from "./pages/TimelineAbout";
import Contact from "./pages/Contact";
import PromptBank from "./pages/PromptBank";
import MyPrompt from "./pages/myprompt";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/timelineAbout" element={<TimelineAbout />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/promptbank" element={<PromptBank />} />
            <Route path="/myprompt" element={<MyPrompt />} />
          </Route>
        </Routes>
      )}
    </>
  );
};

export default App;
