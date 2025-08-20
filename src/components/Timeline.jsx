import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../assets/style.css";

const timelineData = [
  {
    year: '2018',
    title: '10th Standard',
    content: 'Completed 10th grade education with foundational academic growth.',
    icon: 'fas fa-school'
  },
  {
    year: '2020',
    title: '12th Standard',
    content: 'Completed higher secondary education (12th) with distinction.',
    icon: 'fas fa-graduation-cap'
  },
  {
    year: '2023',
    title: 'Bachelor of Computer Applications (BCA)',
    content: 'Graduated with a strong base in computer programming and IT.',
    icon: 'fas fa-laptop-code'
  },
  {
    year: '2024',
    title: 'Web Design Internship',
    content: 'Worked as a web design intern and developed responsive websites.',
    icon: 'fas fa-pen-ruler'
  },
  {
    year: '2024',
    title: 'Joined LinkedIn',
    content: 'Started professional networking and career building via LinkedIn.',
    icon: 'fab fa-linkedin'
  },
  {
    year: '2025',
    title: 'Master of Science in IT (MSc IT)',
    content: 'Pursued advanced studies in information technology and research.',
    icon: 'fas fa-user-graduate'
  },
  {
    year: '2025',
    title: 'Freelancer Work',
    content: 'Started working as a freelance web developer and prompt engineer.',
    icon: 'fas fa-briefcase'
  },
  {
    year: '2025',
    title: 'Started Prompt Engineering Career',
    content: 'Entered the AI field as a Prompt Engineer, building smart solutions.',
    icon: 'fas fa-robot'
  }
];

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="container py-5 overflow-hidden">
      <h2 className="text-center mb-5">My Journey Timeline</h2>
      <div className="position-relative timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, idx) => (
          <div
            key={idx}
            className="row mb-5 align-items-center gx-0"
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
            <div className={`col-12 col-md-6 px-3 ${idx % 2 !== 0 ? 'offset-md-6' : ''}`}>
              <div className="position-relative bg-light p-4 rounded shadow timeline-box">
                <div className="position-absolute d-none d-md-block timeline-icon-desktop">
                  <i className={`${item.icon} bg-primary text-white rounded-circle p-3 fs-5`}></i>
                </div>
                <div className="d-block d-md-none mb-2 text-center">
                  <i className={`${item.icon} bg-primary text-white rounded-circle p-3 fs-5`}></i>
                </div>
                <h5 className="text-danger fw-bold">{item.year}</h5>
                <h6 className="fw-bold">{item.title}</h6>
                <p className="mb-0 small">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;