import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import {
  FaBrain,
  FaCode,
  FaBolt,
  FaUsers,
  FaAward,
  FaLightbulb
} from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';
import Resume from '../pages/Resume';


const AboutSection = () => {
  const tools = [
    'ChatGPT', 'Claude', 'Midjourney', 'DALL-E',
    'Gemini', 'Perplexity', 'Stable Diffusion', 'GPT-4V',
    'AIPRM', 'FlowGPT', 'PromptPerfect', 'Canva Pro'
  ];
  const [show, setShow] = useState(false);
  return (
    <section className="about-section text-center py-5">
      <Container>
        <h1 className="hero-title">
          <span className="text-gradient">About MyMind</span>
        </h1>
        <h1 className="about-subtitle">
          I'm a passionate Prompt Engineer who bridges the gap between human creativity and AI capabilities, transforming ideas into powerful, actionable prompts.
        </h1>
        <div className="d-flex justify-content-center mt-4 flex-wrap">
          <Button
            className="btn-gradient me-3 mb-2"
            onClick={() => setShow(true)}
          >
            View My Resume
          </Button>

          <Modal
            show={show}
            onHide={() => setShow(false)}
            size="lg"
            centered
            dialogClassName="resume-modal"
          >
            <Modal.Body className="bg-dark text-light p-4 rounded">
              <Resume />
              <div className="text-center mt-4">
                <Button variant="secondary" onClick={() => setShow(false)}>
                  Close
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        {/* My Journey */}
        <div className="journey-box text-start mt-5">
          <h1 className="text-info mb-3">My Journey</h1>
          <h5>
            Hi, I’m Sandhya Chhelavada — a self-taught Prompt Engineer & Vibe Coder from India, with a curious mind and a heart full of logic, language, creativity, and innovation. My goal is simple: to unlock the full potential of AI and create solutions that inspire, empower, and make an impact. <br /><br />
            My journey into Prompt Engineering began with a simple question:
            “How can AI truly understand what we want?”
          </h5>
          <br />
          <h5>
            That curiosity pulled me into a world of experimentation, testing, and refinement, where every attempt brought me closer to mastering the delicate balance between logic and creativity. <br /><br /> Over time, I’ve worked on diverse projects — from creative social media content to AI-powered applications — transforming curiosity into capability and passion into purpose. Through freelancing and personal projects, I’ve seen firsthand how the right prompt can turn confusion into clarity, and complexity into simplicity.
          </h5>
          <br />
          <h5>
            Today, I specialize in designing powerful, precise, and human-centered prompts that bridge the gap between humans and machines. For me, Prompt Engineering is not just a skill — it’s both an art and a science. <br /><br /> Alongside this, I am also a Vibe Coder 🎧💻 — blending code with creativity to craft experiences that are not only functional but also aesthetic, immersive, and inspiring. For me, coding is more than just logic; it’s a canvas of imagination where technology meets art.
          </h5>
        </div>

        {/* Expertise */}
        <h2 className="section-title mt-5">
          <span className="text-gradient">Expertise & Skills</span>
        </h2>
        <Row className="g-4 mt-3 justify-content-center">
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaBrain className="skill-icon" />
              <Card.Body>
                <Card.Title>AI & Machine Learning</Card.Title>
                <Card.Text>
                  Expert in prompt engineering for GPT, Claude, and other LLMs
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaCode className="skill-icon" />
              <Card.Body>
                <Card.Title>Technical Writing</Card.Title>
                <Card.Text>
                  Creating clear, effective prompts for complex technical tasks
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaBolt className="skill-icon" />
              <Card.Body>
                <Card.Title>Optimization</Card.Title>
                <Card.Text>
                  Fine-tuning prompts for maximum efficiency and accuracy
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaUsers className="skill-icon" />
              <Card.Body>
                <Card.Title>Team Training</Card.Title>
                <Card.Text>
                  Teaching organizations how to leverage AI effectively
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaAward className="skill-icon" />
              <Card.Body>
                <Card.Title>Best Practices</Card.Title>
                <Card.Text>
                  Developing standardized prompt engineering methodologies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={6}>
            <Card className="skill-card">
              <FaLightbulb className="skill-icon" />
              <Card.Body>
                <Card.Title>Problem Solving</Card.Title>
                <Card.Text>
                  Crafting prompts that solve real-world business challenges
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Tools */}
        <h2 className="section-title mt-4">
          <span className="text-gradient ">Tools I Master</span>
        </h2>

        <Row className="justify-content-center">
          {tools.map((tool, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} className="mb-3">
              <Button className="tool-button w-100">{tool}</Button>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
};

export default AboutSection;
