import React, { useState } from "react";
import { Container, Nav, Tab, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const allProjects = {
  frontend: [
    {
      title: "React Landing Page",
      description: "Responsive React landing page with animation and SEO.",
      img: "https://source.unsplash.com/300x200/?react",
      link: "https://github.com/yourusername/react-landing",
    },
    {
      title: "Bootstrap Admin UI",
      description: "Admin dashboard theme using React and Bootstrap.",
      img: "https://source.unsplash.com/300x200/?bootstrap",
      link: "https://github.com/yourusername/admin-ui",
    },
    {
      title: "Portfolio Website",
      description: "Creative personal portfolio built in React and Bootstrap.",
      img: "https://source.unsplash.com/300x200/?portfolio,website",
      link: "https://github.com/yourusername/portfolio",
    },
  ],
  backend: [
    {
      title: "Node.js API Server",
      description: "RESTful API server using Express.js with JWT auth.",
      img: "https://source.unsplash.com/300x200/?nodejs",
      link: "https://github.com/yourusername/node-api",
    },
    {
      title: "GraphQL Blog Backend",
      description: "Headless blog backend built with GraphQL and MongoDB.",
      img: "https://source.unsplash.com/300x200/?graphql",
      link: "https://github.com/yourusername/graphql-blog",
    },
    {
      title: "Authentication Service",
      description: "OAuth2 and JWT-based authentication microservice.",
      img: "https://source.unsplash.com/300x200/?authentication",
      link: "https://github.com/yourusername/auth-service",
    },
  ],
  uiux: [
    {
      title: "Figma Mobile App Design",
      description: "Creative mobile app prototype using Figma.",
      img: "https://source.unsplash.com/300x200/?figma,design",
      link: "https://www.figma.com/yourdesignlink",
    },
    {
      title: "Web Dashboard UI",
      description: "Modern dashboard interface with UI/UX best practices.",
      img: "https://source.unsplash.com/300x200/?dashboard,ux",
      link: "https://dribbble.com/yourdashboard",
    },
    {
      title: "Dark Mode Design System",
      description: "Systematic UI design with dark/light theme support.",
      img: "https://source.unsplash.com/300x200/?darkmode,ui",
      link: "https://www.figma.com/yourdarkmode",
    },
  ],
  ai: [
    {
      title: "Prompt Generator Tool",
      description: "Custom prompt generation tool for GPT models.",
      img: "https://source.unsplash.com/300x200/?ai,gpt",
      link: "https://github.com/yourusername/prompt-tool",
    },
    {
      title: "Chatbot with OpenAI",
      description: "Conversational AI chatbot built using OpenAI API.",
      img: "https://source.unsplash.com/300x200/?chatbot",
      link: "https://github.com/yourusername/chatbot",
    },
    {
      title: "Image Caption Generator",
      description: "AI tool that describes images using deep learning models.",
      img: "https://source.unsplash.com/300x200/?image,caption",
      link: "https://github.com/yourusername/image-caption",
    },
  ],
};

export default function Portfolio() {
  const [key, setKey] = useState("frontend");

  return (
    <Container fluid className="py-5 bg-dark text-light">
      <h1 className="text-center fw-bold mb-5">🚀 Prompt Engineer Portfolio</h1>
      <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
        <Nav variant="pills" className="justify-content-center mb-4 flex-wrap gap-2">
          {Object.keys(allProjects).map((section) => (
            <Nav.Item key={section}>
              <Nav.Link eventKey={section} className="text-capitalize">
                {section.replace("uiux", "UI/UX")}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {Object.entries(allProjects).map(([section, projects]) => (
            <Tab.Pane eventKey={section} key={section}>
              <Row xs={1} md={2} lg={3} className="g-4">
                {projects.map((project, idx) => (
                  <Col key={idx}>
                    <Card className="h-100 border-0 shadow-lg">
                      <Card.Img variant="top" src={project.img} />
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="fs-4 fw-semibold">{project.title}</Card.Title>
                        <Card.Text className="flex-grow-1">{project.description}</Card.Text>
                        <Button
                          href={project.link}
                          target="_blank"
                          variant="primary"
                          className="mt-auto fw-bold"
                        >
                          View Project
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          ))}
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
}
