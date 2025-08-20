import { Link } from "react-router-dom";
import { Container, Button, Row, Col, Carousel } from 'react-bootstrap';
import '../App.css';
import bgImage from '../assets/brain-bg.jpg'; // Make sure image exists;
import { FaBrain, FaMagic, FaBolt, FaUsers, FaStar, FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  const features = [
    {
      icon: <FaBrain />,
      title: 'Custom-Crafted Prompts',
      desc: 'Built for your audience, industry, and style.',
    },
    {
      icon: <FaMagic />,
      title: 'Fast, Future-Ready Solutions',
      desc: 'AI-powered creativity that keeps you ahead.',
    },
    {
      icon: <FaBolt />,
      title: 'Impactful & Clear',
      desc: 'No fluff, just results that deliver.',
    },
    {
      icon: <FaUsers />,
      title: 'Your Vision, Your Privacy',
      desc: '100% secure & confidential.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Prompts Created', color: '#00aaff' },
    { value: '2%', label: 'Client Satisfaction', color: '#df72ff' },
    { value: '5+', label: 'Happy Clients', color: '#00aaff' },
  ];

  const testimonials = [
    {
      quote: "Incredible expertise in AI. The custom prompts delivered results beyond our expectations.",
      name: "Emily Watson",
      title: "Product Manager at InnovateLab",
    },
    {
      quote: "The prompts transformed how our team interacts with AI tools. Super effective and easy to integrate.",
      name: "Liam Carter",
      title: "Lead Developer at VisionTech",
    },
    {
      quote: "Professional, prompt, and precise. They know how to get results with cutting-edge prompt engineering.",
      name: "Ava Thompson",
      title: "CTO at NeuralNexus",
    },
  ];

  return (
    <main>
      <section className="hero-section position-relative d-flex align-items-center justify-content-center text-center">
        {/* 🔳 Background Image Layer */}
        <div
          className="background-overlay"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.1,
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
          }}
        ></div>

        {/* 🔳 Foreground Content Layer */}
        <Container style={{ zIndex: 2 }}>
          <h1 className="hero-title">
            <span className="text-gradient">MyMind</span>
          </h1>
          <h1 className="hero-subtitle">
            "Shaping AI With Thought, Turning Ideas Into Reality"
          </h1>
          <p className="hero-description">
            Where every word you choose makes AI think, feel, and create for you.
          </p>
          <div className="d-flex justify-content-center mt-4 flex-wrap">
            <Link to="/myprompt" className="text-decoration-none">
              <Button className="btn-gradient me-3 mb-2">Explore Prompts →</Button>
            </Link>
            <a href="/about" className="text-decoration-none">
              <Button className="btn-dark mb-2">Learn More</Button>
            </a>
          </div>
        </Container>
      </section>

      <section className="why-choose-section text-center py-5">
        <Container>
          <h2 className="section-title">
            <span className="text-gradient">Who I Am ?</span>
          </h2>
          <div className="journey-box text-start mt-5">
            <h5>
              Hello, I am <span className="text-gradient">Sandhya Chhelavada</span>👩‍💻, an aspiring AI Prompt Engineer, deeply passionate about shaping the way humans and AI communicate.
            </h5>
            <br />
            <h5>
              My journey began with a fascination for how language can influence AI interactions, and since then, I’ve dedicated myself to mastering the art of prompt engineering. I specialize in designing prompts that are clear, optimized, and result-driven, ensuring that AI outputs align perfectly with user expectations.
            </h5>
            <br />
            <h5>
              Alongside prompt engineering, I also explore the world of Vibe Coding — blending creative coding with aesthetic designs, where code is not just functional but also an experience. This combination allows me to bring both logic and creativity together, making my work impactful, innovative, and future-ready.
            </h5>
          </div>
        </Container>
      </section>

      <section className="why-choose-section text-center py-5">
        <Container>
          <h2 className="section-title">
            <span className="text-gradient">Why Choose MyMind?</span>
          </h2>
          <h1 className="section-subtitle">
            "Where your thoughts find their perfect words."
            At MyMind, we don’t just write prompts — we design experiences.
            Every prompt is powered by precision, creativity, and AI mastery, helping your ideas shine brighter.
          </h1>

          <Row className="mt-5">
            {features.map((item, idx) => (
              <Col md={6} lg={3} sm={12} className="mb-4" key={idx}>
                <div className="feature-card h-100">
                  <div className="feature-icon">{item.icon}</div>
                  <h5 className="feature-title">{item.title}</h5>
                  <p className="feature-desc">{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
          <h1 className="section-subtitle">
            ✨ MyMind – Turning Imagination into Intelligent Conversations.
          </h1>
        </Container>
      </section>

      <section className="proven-results-section text-center py-5">
        <Container>
          <h2 className="section-title">
            <span className="text-gradient">Proven Results</span>
          </h2>

          <Row className="justify-content-center mt-5">
            {stats.map((item, index) => (
              <Col key={index} xs={12} sm={6} md={4} className="mb-4">
                <div className="stat-box">
                  <h3 style={{ color: item.color }}>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* <section className="testimonial-section text-center py-5">
        <Container>
          <h2 className="section-title">
            <span className="text-gradient mb-5">What Clients Say</span>
          </h2>

          <Carousel interval={2000} indicators={true} controls={false} fade>
            {testimonials.map((testimonial, idx) => (
              <Carousel.Item key={idx}>
                <div className="testimonial-card mx-auto">
                  <div className="testimonial-stars mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} color="#00aaff" size={20} />
                    ))}
                  </div>
                  <p className="testimonial-quote">
                    <em>"{testimonial.quote}"</em>
                  </p>
                  <h5 className="testimonial-name mt-4">{testimonial.name}</h5>
                  <p className="testimonial-title">{testimonial.title}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section> */}

      <section className="cta-section py-5">
        <Container>
          <div className="cta-box mx-auto text-center">
            <h2 className="cta-title">Ready to Transform Your AI Workflow?</h2>
            <p className="cta-subtitle">
              Let's discuss your prompt engineering needs and create something amazing together.
            </p>

            <Row className="justify-content-center mt-4">
              <Col xs="auto">
                <Button className="btn-gradient">
                  Get Started Today <FaArrowRight className="ms-2" />
                </Button>
              </Col>
              <Col xs="auto">
                <Button className="btn-dark-custom">
                  View Portfolio
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default HeroSection;
