// import React from 'react'

// const CyberSecurity = () => {
//   return (
//     <div>CyberSecurity</div>
//   )
// }

// export default CyberSecurity


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
import cybersecurityImg1 from './images/cyber-1.webp';
import cybersecurityImg2 from './images/cyber-2.webp';
import cybersecurityImg3 from './images/cyber-7.webp';
import cybersecurityImg4 from './images/cyber-3.webp';
import cybersecurityImg5 from './images/cyber-4.png';
import cybersecurityImg6 from './images/cybersecuity-6.gif';
import cybersecurityImg7 from './images/cyber-7.webp';
import cybersecurityImg8 from './images/cyber-8.webp';
import cybersecurityImg9 from './images/cyber-9.webp';
import './CyberSecurity.css';

const CyberSecurity = () => {
  const articles = [
    {
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      author: "Tushar Vinocha",
      date: "16 Apr, 2024",
      readTime: "5 Min Read",
      views: 3661,
      image: cybersecurityImg1,
    },
    {
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      author: "Jaishree Tomar",
      date: "26 Mar, 2024",
      readTime: "4 Min Read",
      views: 3520,
      image: cybersecurityImg2,
    },
    {
      title: "Cybersecurity vs Artificial Intelligence | Better Career",
      author: "admin",
      date: "16 Apr, 2024",
      readTime: "2 Min Read",
      views: 3155,
      image: cybersecurityImg3,
    },
    {
      title: "What Is Hacking? Types of Hacking & More",
      author: "Meghana D",
      date: "25 Mar, 2024",
      readTime: "6 Min Read",
      views: 2510,
      image: cybersecurityImg4,
    },
    {
      title: "8 Different Types of Cybersecurity and Threats Involved",
      author: "Tushar Vinocha",
      date: "08 Sep, 2023",
      readTime: "4 Min Read",
      views: 1430,
      image: cybersecurityImg5,
    },
    {
      title: "What is Cybersecurity? Importance and its uses & the growing challenge...",
      author: "Tushar Vinocha",
      date: "04 Oct, 2023",
      readTime: "4 Min Read",
      views: 1235,
      image: cybersecurityImg6,
    },
    {
      title: "Is coding required for cybersecurity? If yes, how crucial is coding for cyb...",
      author: "Tushar Vinocha",
      date: "25 Mar, 2024",
      readTime: "4 Min Read",
      views: 1137,
      image: cybersecurityImg7,
    },
    {
      title: "The Ultimate Cybersecurity Roadmap for Beginners",
      author: "Srinithi Sankar",
      date: "23 Mar, 2024",
      readTime: "3 Min Read",
      views: 1033,
      image: cybersecurityImg8,
    },
    {
      title: "The Cybersecurity Surge: 5 Must-Have Cybersecurity Certifications!",
      author: "Tushar Vinocha",
      date: "25 Mar, 2024",
      readTime: "3 Min Read",
      views: 1024,
      image: cybersecurityImg9,
    },
  ];

  return (
    <div className="container">
      <h1>Cyber Security</h1>
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

export default CyberSecurity;
