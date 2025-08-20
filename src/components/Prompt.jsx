import React, { useState } from "react";
import { Carousel, Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const prompts = [
  {
    title: "AI Productivity Booster",
    description: "Let AI prioritize your daily tasks based on urgency and effort.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    link: "https://openai.com"
  },
  {
    title: "Creative Blog Writer",
    description: "Generate SEO-optimized blog content in minutes with a few keywords.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    link: "https://copy.ai"
  },
  {
    title: "Marketing Copy Generator",
    description: "Get high-converting headlines and ad copy for your campaigns.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33",
    link: "https://neuraltext.com"
  },
  {
    title: "Smart Resume Builder",
    description: "Build a tailored resume from your job description using AI.",
    image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
    link: "https://resumegenius.com"
  },
  {
    title: "Customer Support Chatbot",
    description: "Create instant customer support responses based on FAQ.",
    image: "https://support.cc/images/blog/chatbot-customer-service.png?v=1682512742702523116",
    link: "https://intercom.com"
  },
  {
    title: "Code Debug Assistant",
    description: "Paste your error, and let AI debug your code instantly.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    link: "https://sentry.io"
  },
  {
    title: "Social Media Caption Bot",
    description: "Generate catchy captions for Instagram, Twitter and more.",
    image: "https://elatre.com/wp-content/uploads/2023/10/How-Social-Media-Bots-Can-Boost-Your-Business-1-900x410.jpg",
    link: "https://later.com"
  },
  {
    title: "Email Reply Assistant",
    description: "Write professional email replies in seconds.",
    image: "https://cdn-rdstaticassets.readdle.com/spark/content_pages/guides_ai-email-reply/19.jpg",
    link: "https://flowrite.com"
  },
  {
    title: "Language Translator",
    description: "Translate text or phrases to multiple languages in context.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdrvMDH0KyLD9cFUtg-RIK7GG7-GzRpE0jQA&s",
    link: "https://deepl.com"
  },
  {
    title: "YouTube Script Writer",
    description: "Generate full scripts for videos based on your title and niche.",
    image: "https://images.squarespace-cdn.com/content/v1/60956f69f8fafe4b3e171dcd/1748107551538-BG5CM0D56XG2QV3N4S0I/youtube+how+to+hire+a+youtube+script+writer+for+channel+growth.jpg",
    link: "https://vidyo.ai"
  }
];

const Prompt = () => {
  const [modalShow, setModalShow] = useState(false);
  const [activePrompt, setActivePrompt] = useState(null);

  const openModal = (prompt) => {
    setActivePrompt(prompt);
    setModalShow(true);
  };

  return (
    <div className="w-100" style={{ backgroundColor: "#111" }}>
      <Carousel fade interval={5000} indicators={false} controls={true}>
        {prompts.map((item, idx) => (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={item.image}
              alt={`Slide ${idx}`}
              style={{ height: "70vh", objectFit: "cover", opacity: 0.4 }}
            />
            <Carousel.Caption>
              <h2
                className="fw-bold text-white cursor-pointer"
                style={{ cursor: "pointer" }}
                onClick={() => openModal(item)}
              >
                {item.title}
              </h2>
              <p className="text-white-50 fw-semibold">{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{activePrompt?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{activePrompt?.description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="primary" href={activePrompt?.link} target="_blank">
            Try Prompt
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Prompt;
