import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import careerImg1 from './images/ca-1.webp';
import careerImg2 from './images/ca-2.webp';
import careerImg3 from './images/ca-3.webp';
import careerImg4 from './images/ca-4.webp';
import careerImg5 from './images/ca-5.webp';
import careerImg6 from './images/ca-6.jpg';
import careerImg7 from './images/ca-7.webp';
import careerImg8 from './images/ca-8.webp';
import careerImg9 from './images/ca-9.webp';
import './Career.css';

const Career = () => {
  const articles = [
    {
      title: "How Does an SEO Certification Elevate Your Digital Marketing Career?",
      author: "Srinithi Sankar",
      date: "23 May, 2024",
      readTime: "4 Min Read",
      views: 805,
      image: careerImg1,
    },
    {
      title: "Career in Animation: Jobs, Salary, Future Scope in India (2024)",
      author: "Saanchi Bhardwaj",
      date: "03 May, 2024",
      readTime: "4 Min Read",
      views: 4501,
      image: careerImg2,
    },
    {
      title: "10 Tips to Stay Motivated in Your Motion Graphic Design Career",
      author: "Saakshi Priyadarshini",
      date: "29 Apr, 2024",
      readTime: "7 Min Read",
      views: 2781,
      image: careerImg3,
    },
    {
      title: "How to Become a Digital Marketer – Digital Marketing Career Roadmap",
      author: "Meghana D",
      date: "16 Apr, 2024",
      readTime: "9 Min Read",
      views: 2961,
      image: careerImg4,
    },
    {
      title: "Is Data Science A Good Career Choice In 2024?",
      author: "Archana",
      date: "16 Apr, 2024",
      readTime: "4 Min Read",
      views: 2245,
      image: careerImg5,
    },
    {
      title: "As a Software Engineer, How Do I Shift My Career to DevOps?",
      author: "Lahari Chandana",
      date: "16 Apr, 2024",
      readTime: "5 Min Read",
      views: 3501,
      image: careerImg6,
    },
    {
      title: "Is Choosing Automation Testing a Good Career Opportunity in 2024?",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "3 Min Read",
      views: 2961,
      image: careerImg7,
    },
    {
      title: "Data Science vs Data Analytics | Best Career Choice in 2024",
      author: "Lahari Chandana",
      date: "16 Apr, 2024",
      readTime: "3 Min Read",
      views: 2245,
      image: careerImg8,
    },
    {
      title: "How to Become a Motion Graphics Designer – Complete Career Roadmap",
      author: "Meghana D",
      date: "16 Apr, 2024",
      readTime: "7 Min Read",
      views: 2781,
      image: careerImg9,
    },
  ];

  return (
    <div className="container">
      <h1>Career Articles</h1>
      <div className="row">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <img src={article.image} className="card-img-top" alt="Article" />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">By {article.author}</p>
                <p className="card-text">{article.date}</p>
                <p className="card-text">
                  <FontAwesomeIcon icon={faClock} /> {article.readTime} &nbsp;
                  <FontAwesomeIcon icon={faEye} /> {article.views}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h3>Follow us on</h3>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="#"><FontAwesomeIcon icon={faTelegram} /></a>
        <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
      </div>
      <div className="footer-bottom">
        <ul className="footer-links">
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
        <p>&copy; 2024 GUVI Geeks Network Pvt. Ltd</p>
      </div>
    </div>
  </footer>
);

export default Career;
