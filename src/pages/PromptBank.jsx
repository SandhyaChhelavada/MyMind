import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Tab, Nav, Card } from 'react-bootstrap';
import { FaCopy, FaHeart } from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';


const prompts = [
  {
    title: 'Creative Story Generator',
    category: 'Creative',
    prompt: 'Write a captivating story about [TOPIC] that includes [CHARACTER TYPE] facing [CHALLENGE]. The story should be approximately [LENGTH] and have a [TONE] tone.',
    tags: ['storytelling', 'creative', 'characters']
  },
  {
    title: 'Social Media Post Creator',
    category: 'Social Media',
    prompt: 'Create a [PLATFORM] post about [TOPIC] that [GOAL]. Include relevant hashtags and make it [TONE]. Target audience: [AUDIENCE].',
    tags: ['social media', 'marketing', 'engagement']
  },
  {
    title: 'Vibe Coding',
    category: 'Coding',
    prompt: '“Generate a pure HTML/CSS/JS, fully responsive neon ‘AI-vibe’ gradient loader with conic-spinner, orbiting particles, glass-morphism card, 4 switchable gradient palettes, A11y (role="status" + reduced-motion), dark/light support, and an API: setLoaderState() + setPalette(). No libs, production-ready, commented.”',
    tags: ['coding', 'ai', 'language']
  },
  {
    title: 'Expert Consultant Role',
    category: 'Role-Based',
    prompt: 'Act as a [PROFESSION] with [YEARS] years of experience in [FIELD]. I need your expert advice on [SPECIFIC PROBLEM]. Please provide actionable recommendations.',
    tags: ['expert', 'consulting', 'professional']
  },
  {
    title: 'Problem-Solution Framework',
    category: 'Problem Solving',
    prompt: 'Analyze this problem: [PROBLEM DESCRIPTION]. Break it down into: 1) Root causes, 2) Potential solutions, 3) Implementation steps, 4) Success metrics.',
    tags: ['analysis', 'solutions', 'framework']
  },
  {
    title: 'Image Analysis & Description',
    category: 'Multimodal',
    prompt: 'Analyze this image and provide: 1) Detailed description, 2) Key elements and composition, 3) Mood/atmosphere, 4) Potential use cases or improvements.',
    tags: ['image', 'analysis', 'description']
  },
  {
    title: 'Email Marketing Campaign',
    category: 'Real-world Use Case',
    prompt: 'Create an email marketing campaign for [PRODUCT/SERVICE] targeting [AUDIENCE]. Include: subject line, preview text, email body, and call-to-action.',
    tags: ['email', 'marketing', 'business']
  },
//   {
//     title: 'Email Marketing Campaign',
//     category: 'Real-world Use Case',
//     prompt: 'Create a professional logo design for the brand “[BRAND NAME]”. 
// Logo type: [LOGO TYPE — e.g., pictorial mark, abstract, minimalist, mascot, wordmark, combination mark].  
// Style: [STYLE — e.g., modern, luxurious, playful, elegant, futuristic].  
// Primary colors: [COLOR 1], [COLOR 2], [COLOR 3].  
// Include [specific element/symbol if needed].  
// High resolution, vector style, clean lines, balanced composition, transparent background.',
//     tags: ['email', 'marketing', 'business']
//   }
];

const PromptBank = () => {
  const categories = ['All', ...new Set(prompts.map(p => p.category))];
  const [active, setActive] = useState('All');

  return (
    <section className="prompt-bank-section py-5 text-center">
      <Container>
        <h1 className="hero-title">
          <span className="text-gradient">Prompt Bank</span>
        </h1>
        <p className="subtitle">Discover powerful, tested prompts organized by category. Copy, customize, and create amazing results.</p>

        <Form className="my-4">
          <Form.Control type="text" placeholder="Search prompts..." className="search-input" />
        </Form>

        {/* Tabs */}
        <Nav fill variant="tabs" className="justify-content-center mb-4 prompt-tabs">
          {categories.map((cat, idx) => (
            <Nav.Item key={idx}>
              <Nav.Link
                eventKey={cat}
                active={active === cat}
                onClick={() => setActive(cat)}
              >
                {cat}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Prompt Cards */}
        <Row>
          {prompts
            .filter(p => active === 'All' || p.category === active)
            .map((prompt, idx) => (
              <Col md={6} className="mb-4" key={idx}>
                <Card className="prompt-card text-start">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center text-white">
                      <h5>{prompt.title}</h5>
                      <FaHeart className="icon-hover" />
                    </div>
                    <span className="badge bg-dark-subtle text-info small mb-2">{prompt.category}</span>
                    <p className="prompt-desc">{prompt.prompt}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {prompt.tags.map((tag, i) => (
                        <span key={i} className="badge bg-dark text-secondary">{tag}</span>
                      ))}
                    </div>
                    <Button variant="outline-light" size="sm" className="copy-btn">
                      <FaCopy className="me-2" />Copy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default PromptBank;


