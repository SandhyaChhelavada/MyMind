import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub, FaPaperPlane } from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';

const ContactSection = () => {
  return (
    <section className="contact-section py-5 text-light">
      <Container>
        <h2 className="section-title gradient-text text-center mb-3">Let's Connect</h2>
        <p className="text-center subtitle mb-5">
          Ready to transform your AI workflow? Let's discuss your prompt engineering needs<br />
          and create something amazing together.
        </p>

        <Row className="gy-4">
          {/* Form */}
          <Col lg={6}>
            <div className="contact-card">
              <h5 className="text-info mb-3">
                <FaEnvelope className="me-2" /> Send a Message
              </h5>
              <Form>
                <Row className="mb-3">
                  <Col>
                    <Form.Control type="text" placeholder="Your name" />
                  </Col>
                  <Col>
                    <Form.Control type="email" placeholder="your@email.com" />
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="What's this about?" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Tell me about your project, goals, and how I can help..." />
                </Form.Group>
                <Button className="btn-gradient w-100">
                  <FaPaperPlane className="me-2" /> Send Message
                </Button>
              </Form>
            </div>
          </Col>

          {/* Contact Info & Opportunities */}
          <Col lg={6}>
            <div className="contact-card mb-4">
              <h5 className="mb-3">Connect With Me</h5>
              <p><FaEnvelope className="icon me-2" /> schhelavadawork@gmail.com</p>
              <p>
                <a href="https://www.linkedin.com/in/sandhya-chhelavada-675160309/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon me-2" /> Sandhya Chhelavada
                </a>
              </p>

              <p>
                <a href="https://www.instagram.com/mymind.codevibe/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon me-2" /> @mymindaii
                </a>
              </p>

              <p>
                <a href="https://github.com/SandhyaChhelavada" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon me-2" /> SandhyaChhelavada
                </a>
              </p>
            </div>


            <div className="contact-card text-center">
              <h6 className="gradient-text">Partner With MyMind</h6>
              <p>Interested in collaboration or advertising opportunities? Let's explore how we can work together.</p>
              <Button variant="dark">Learn More</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
