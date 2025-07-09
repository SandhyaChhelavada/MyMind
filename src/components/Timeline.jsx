import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const timelineData = [
  {
    year: '2018',
    title: 'LinkedIn',
    content: 'A business- and employment-oriented social networking service that operates via websites and mobile apps.',
    icon: 'fab fa-linkedin'
  },
  {
    year: '2004',
    title: 'Facebook',
    content: 'An online social media and social networking service based in Menlo Park, California.',
    icon: 'fab fa-facebook'
  },
  {
    year: '2005',
    title: 'YouTube',
    content: 'First large-scale video sharing website that makes it easy to watch videos online.',
    icon: 'fab fa-youtube'
  },
  {
    year: '2006',
    title: 'Twitter',
    content: 'A service for friends, family, and coworkers to communicate and stay connected through the exchange of quick, frequent messages.',
    icon: 'fab fa-twitter'
  },
  {
    year: '2007',
    title: 'Tumblr',
    content: 'Lets you effortlessly share anything. Post text, photos, quotes, links, music, and videos from your browser, phone, desktop, email.',
    icon: 'fab fa-tumblr'
  },
  {
    year: '2010',
    title: 'Pinterest',
    content: 'A visual bookmarking tool that helps you discover and save creative ideas.',
    icon: 'fab fa-pinterest'
  },
  {
    year: '2002',
    title: 'LinkedIn',
    content: 'A business- and employment-oriented social networking service that operates via websites and mobile apps.',
    icon: 'fab fa-linkedin'
  }
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Timeline</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex flex-column align-items-center position-relative">
            {timelineData.map((item, idx) => (
              <div
                key={idx}
                className="row w-100 mb-4"
                data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className={`col-12 col-md-6 ${idx % 2 === 0 ? '' : 'offset-md-6'}`}>
                  <div className="bg-light p-4 rounded shadow position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle d-none d-md-block">
                      <i className={`${item.icon} bg-primary text-white rounded-circle p-3`}></i>
                    </div>
                    <h5 className="text-danger fw-bold">{item.year}</h5>
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="mb-0 small">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="position-absolute top-0 bottom-0 start-50 translate-middle-x bg-primary" style={{ width: '4px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
