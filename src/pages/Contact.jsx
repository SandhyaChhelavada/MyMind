// File: src/components/ContactPage.jsx

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-vh-100 d-flex align-items-center"
      style={{ backgroundColor: "#111" }}
    >
      <Container className="py-5">
        <Row className="g-4">
          <Col
            md={5}
            className="bg-warning text-white p-4 rounded shadow"
            style={{ backgroundColor: "#a67c52" }}
            data-aos="fade-right"
          >
            <h3 className="fw-bold mb-3">Contact Info</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Vestibulum ante ipsum primis.
            </p>

            <div className="d-flex align-items-start mb-4">
              <div className="me-3">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Our Location</h6>
                <p className="mb-0">A108 Adam Street</p>
                <p>New York, NY 535022</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <div className="me-3">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Phone Number</h6>
                <p className="mb-0">+1 5589 55488 55</p>
                <p>+1 6678 254445 41</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <div className="me-3">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h6 className="fw-bold mb-1">Email Address</h6>
                <p className="mb-0">info@example.com</p>
                <p>contact@example.com</p>
              </div>
            </div>
          </Col>

          <Col
            md={7}
            className="bg-dark text-white p-4 rounded shadow"
            data-aos="fade-left"
          >
            <h3 className="fw-bold mb-3">Get In Touch</h3>
            <p>
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Vestibulum ante ipsum primis.
            </p>

            <Form>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    className="bg-dark text-white border-secondary"
                  />
                </Col>
                <Col md={6}>
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    className="bg-dark text-white border-secondary"
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    className="bg-dark text-white border-secondary"
                  />
                </Col>
                <Col md={12}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    className="bg-dark text-white border-secondary"
                  />
                </Col>
                <Col md={12} className="text-end">
                  <Button
                    variant="warning"
                    className="px-4 rounded-pill fw-semibold"
                    style={{ backgroundColor: "#a67c52", border: "none" }}
                  >
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
