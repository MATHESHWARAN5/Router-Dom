// import React from 'react'

// const FullStackDevelopment = () => {
//   return (
//     <div>FullStackDevelopment</div>
//   )
// }

// export default FullStackDevelopment


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
import projectImg1 from './images/person-front-computer-working-html.jpg';
import projectImg2 from './images/Full1.webp';
import projectImg3 from './images/Full-3.webp';
import projectImg4 from './images/Full-4.webp';
import projectImg5 from './images/Full-5.jpg';
import projectImg6 from './images/Full-6.jpg';
import projectImg7 from './images/Full-7.jpg';
import projectImg8 from './images/Full-8.webp';
import projectImg9 from './images/Full-2.webp';
import './FullStackDevelopment.css';

const FullStackDevelopment = () => {
  const articles = [
    {
      title: "Best Full-Stack Development Project Ideas in 2024",
      author: "Isha Sharma",
      date: "25 Mar, 2024",
      readTime: "4 Min Read",
      views: 12503,
      image: projectImg1,
    },
    {
      title: "How Long Would It Take to Be a Full Stack Developer?",
      author: "Meghana D",
      date: "26 Mar, 2024",
      readTime: "3 Min Read",
      views: 10436,
      image: projectImg2,
    },
    {
      title: "How does Apache work? A detailed introduction to Apache",
      author: "Tushar Vinocha",
      date: "26 Mar, 2024",
      readTime: "5 Min Read",
      views: 8644,
      image: projectImg3,
    },
    {
      title: "10 Best Database Management Systems For Software Developers",
      author: "Isha Sharma",
      date: "22 Mar, 2024",
      readTime: "4 Min Read",
      views: 7340,
      image: projectImg4,
    },
    {
      title: "Hot Topics That You Need To Know In Full Stack Developer Syllabus | 2024",
      author: "Archana",
      date: "26 Mar, 2024",
      readTime: "6 Min Read",
      views: 6921,
      image: projectImg5,
    },
    {
      title: "6 Essential Prerequisites For Learning ReactJS",
      author: "Ramkumar",
      date: "25 Mar, 2024",
      readTime: "3 Min Read",
      views: 6242,
      image: projectImg6,
    },
    {
      title: "Top 10 Full-Stack Developer Frameworks in 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "5 Min Read",
      views: 6096,
      image: projectImg7,
    },
    {
      title: "Best Web Development Roadmap for Beginners 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "5 Min Read",
      views: 5678,
      image: projectImg8,
    },
    {
      title: "Full Stack Developer Roadmap: A Complete Guide [2024]",
      author: "Meghana D",
      date: "19 Mar, 2024",
      readTime: "6 Min Read",
      views: 3675,
      image: projectImg9,
    },
  ];

  return (
    <div className="container">
      <h1>Full Stack Development</h1>
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

export default FullStackDevelopment;
