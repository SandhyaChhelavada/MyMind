import React from 'react';
import { Container, Row, Col, Button, Card, Badge, Form } from 'react-bootstrap';
import { FaClock, FaArrowRight, FaCalendarAlt } from 'react-icons/fa';
import '../assets/style.css';
import '../App.css';

const articles = [
  {
    title: 'The Future of Prompt Engineering: Trends to Watch in 2024',
    date: '2024-01-15',
    readTime: '8 min read',
    type: 'Trends',
    featured: true,
    description: 'Explore the latest developments in AI prompt engineering and what they mean for professionals and businesses.',
    tags: ['AI', 'Future', 'Trends'],
  },
  {
    title: 'Mastering Chain-of-Thought Prompting',
    date: '2024-01-12',
    readTime: '12 min read',
    type: 'Tutorial',
    description: 'Learn how to break down complex problems into manageable steps using advanced prompting techniques.',
    tags: ['Tutorial', 'Advanced', 'Techniques'],
  },
  {
    title: 'Building Better Chatbots with Conversational Prompts',
    date: '2024-01-10',
    readTime: '6 min read',
    type: 'Use Cases',
    description: 'Discover the secrets to creating natural, helpful, and engaging AI conversations.',
    tags: ['Chatbots', 'Conversation', 'UX'],
  },
  {
    title: 'Prompt Security: Protecting Against Injection Attacks',
    date: '2024-01-08',
    readTime: '10 min read',
    type: 'Security',
    description: 'Essential security considerations when working with user-generated prompts in production systems.',
    tags: ['Security', 'Best Practices', 'Safety'],
  },
  {
    title: 'Creative Writing with AI: A Collaboration Guide',
    date: '2024-01-05',
    readTime: '7 min read',
    type: 'Creative',
    description: 'How writers can leverage AI as a creative partner while maintaining their unique voice and style.',
    tags: ['Creative', 'Writing', 'Collaboration'],
  },
  {
    title: 'ROI of AI: Measuring Prompt Engineering Success',
    date: '2024-01-03',
    readTime: '9 min read',
    type: 'Business',
    description: 'Learn how to quantify the business impact of your prompt engineering initiatives.',
    tags: ['Business', 'ROI', 'Metrics'],
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section text-light py-5">
      <Container>
        <h2 className="gradient-text text-center mb-3">Blog</h2>
        <p className="subtitle text-center mb-5">
          Insights, tutorials, and thoughts on the evolving world of AI and prompt engineering.
        </p>

        {/* Featured Article */}
        <Row className="mb-5">
          {articles.filter(a => a.featured).map((article, idx) => (
            <Col key={idx} md={12}>
              <Card className="featured-article d-flex flex-row">
                <div className="featured-img" />
                <Card.Body>
                  <Badge bg="light" text="dark" className="mb-2">{article.type}</Badge>
                  <Card.Title className="text-white">{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <div className="d-flex align-items-center gap-3 text-muted mb-2">
                    <span><FaCalendarAlt className="me-1" /> {article.date}</span>
                    <span><FaClock className="me-1" /> {article.readTime}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="badge bg-dark text-light">{tag}</span>
                    ))}
                  </div>
                  <Button className="btn-gradient-sm">Read Article <FaArrowRight className="ms-2" /></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Latest Articles */}
        <h4 className="gradient-text mb-4">Latest Articles</h4>
        <Row className="g-4">
          {articles.filter(a => !a.featured).map((article, idx) => (
            <Col md={4} sm={6} key={idx}>
              <Card className="blog-card h-100">
                <div className="blog-img" />
                <Card.Body>
                  <Badge bg="secondary" className="mb-2">{article.type}</Badge>
                  <Card.Title className="text-white">{article.title}</Card.Title>
                  <Card.Text>{article.description}</Card.Text>
                  <div className="d-flex align-items-center gap-3 text-muted mb-2">
                    <span><FaCalendarAlt className="me-1" /> {article.date}</span>
                    <span><FaClock className="me-1" /> {article.readTime}</span>
                  </div>
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag, i) => (
                      <span key={i} className="badge bg-dark text-light">{tag}</span>
                    ))}
                  </div>
                  <Button className="btn-gradient-sm">Read More <FaArrowRight className="ms-2" /></Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Subscription Section */}
        <div className="subscribe-box mt-5 p-4 text-center">
          <h5 className="gradient-text mb-2">Stay Updated</h5>
          <p>Get the latest prompt engineering insights and tutorials delivered to your inbox.</p>
          <Form className="d-flex justify-content-center flex-wrap gap-2 mt-3">
            <Form.Control type="email" placeholder="Enter your email" className="email-input" />
            <Button className="btn-gradient-sm">Subscribe</Button>
          </Form>
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
