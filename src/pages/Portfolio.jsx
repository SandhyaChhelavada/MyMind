import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaEye } from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';

const projects = [
  {
    category: 'Commercial Writing',
    title: 'E-commerce Product Descriptions',
    summary: 'Generated compelling product descriptions for 500+ items, increasing conversion rates by 35%',
    samplePrompt: 'Create a compelling product description for [PRODUCT] that highlights [KEY FEATURES], appeals to [TARGET AUDIENCE], and includes [BRAND VOICE]. Focus on benefits over features.',
    impact: 'Transformed bland product listings into engaging narratives that sell.',
    tags: ['E-commerce', 'Copywriting', 'Conversion']
  },
  {
    category: 'Technical Writing',
    title: 'Technical Documentation Suite',
    summary: 'Created comprehensive API documentation and user guides for a SaaS platform',
    samplePrompt: 'Write clear, beginner-friendly documentation for [API/FEATURE] that includes examples, common use cases, and troubleshooting steps. Target audience: [SKILL LEVEL].',
    impact: 'Reduced customer support tickets by 60% and improved developer onboarding',
    tags: ['Documentation', 'API', 'SaaS']
  },
  {
    category: 'Marketing',
    title: 'Social Media Campaign Generator',
    summary: 'Developed prompts for automated social media content creation across multiple platforms',
    samplePrompt: 'Create a 30-day social media campaign for [BRAND] about [TOPIC]. Include posts for [PLATFORMS], engagement strategies, and hashtag research.',
    impact: 'Generated 90 days of content in 2 hours, maintaining brand consistency',
    tags: ['Social Media', 'Automation', 'Branding']
  },
  {
    category: 'Education',
    title: 'Creative Writing Workshop',
    summary: 'Designed prompts for creative writing exercises used in university courses',
    samplePrompt: 'Create a writing exercise that helps students practice [SKILL] through [FORMAT]. Include clear instructions, examples, and evaluation criteria.',
    impact: 'Adopted by 12 universities, helping 2000+ students improve writing',
    tags: ['Education', 'Creative Writing', 'Curriculum']
  },
  {
    category: 'Business Intelligence',
    title: 'Data Analysis Automation',
    summary: 'Created prompts for automated data interpretation and business insights',
    samplePrompt: 'Analyze this data [DATA] and provide: 1) Key trends, 2) Actionable insights, 3) Recommendations for [BUSINESS GOAL], 4) Potential risks or opportunities.',
    impact: 'Reduced analysis time from days to hours while improving accuracy',
    tags: ['Data Analysis', 'Business Intelligence', 'Automation']
  },
  {
    category: 'Customer Support',
    title: 'Customer Service Chatbot',
    summary: 'Developed conversational prompts for AI-powered customer service',
    samplePrompt: 'Handle this customer query: [QUERY]. Respond with empathy, provide solutions, escalate if needed, and maintain [BRAND TONE]. Always confirm understanding.',
    impact: 'Achieved 95% customer satisfaction with 70% reduction in human intervention',
    tags: ['Customer Service', 'Chatbot', 'Support']
  },
];

const PortfolioSection = () => {
  return (
    <section className="portfolio-section py-5 text-light">
      <Container>
        <h2 className="gradient-text text-center mb-3">Portfolio</h2>
        <p className="subtitle text-center mb-5">
          Real projects, real results. See how strategic prompt engineering transforms businesses and workflows.
        </p>

        <Row className="g-4">
          {projects.map((proj, idx) => (
            <Col md={6} lg={4} key={idx}>
              <Card className="portfolio-card h-100">
                <div className="card-gradient-top">
                  <FaEye className="eye-icon" />
                </div>
                <Card.Body>
                  <span className="badge bg-dark text-info mb-2">{proj.category}</span>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text className="text-muted">{proj.summary}</Card.Text>

                  <h6 className="text-info">Sample Prompt:</h6>
                  <p className="sample">{proj.samplePrompt}</p>

                  <h6 className="text-pink">Impact:</h6>
                  <p className="text-muted">{proj.impact}</p>

                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {proj.tags.map((tag, i) => (
                      <span className="badge bg-secondary text-light" key={i}>{tag}</span>
                    ))}
                  </div>

                  <Button variant="outline-light" size="sm" className="w-100">
                    <FaEye className="me-2" /> View Details
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

export default PortfolioSection;
