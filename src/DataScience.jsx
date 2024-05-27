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
import dataScienceImg1 from './images/data-1.webp';
import dataScienceImg2 from './images/data-2.webp';
import dataScienceImg3 from './images/data-3.webp';
import dataScienceImg4 from './images/data-4.webp';
import dataScienceImg5 from './images/data-5.webp';
import dataScienceImg6 from './images/data-6.webp';
import dataScienceImg7 from './images/data-7.webp';
import dataScienceImg8 from './images/data-8.jpg';
import dataScienceImg9 from './images/data-9.webp';
import './DataScience.css';

const DataScience = () => {
  const articles = [
    {
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author: "Isha Sharma",
      date: "16 Apr, 2024",
      readTime: "6 Min Read",
      views: 8871,
      image: dataScienceImg1,
    },
    {
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      author: "Lukesh S",
      date: "25 Mar, 2024",
      readTime: "7 Min Read",
      views: 6574,
      image: dataScienceImg2,
    },
    {
      title: "Can A Commerce Student Do Data Science?",
      author: "Saakshi Priyadarshini",
      date: "16 Apr, 2024",
      readTime: "3 Min Read",
      views: 5343,
      image: dataScienceImg3,
    },
    {
      title: "Top Product-Based Companies for Data Scientists in 2024",
      author: "Jaishree Tomar",
      date: "26 Mar, 2024",
      readTime: "4 Min Read",
      views: 3656,
      image: dataScienceImg4,
    },
    {
      title: "Roles and Responsibilities of a Data Scientist",
      author: "Jaishree Tomar",
      date: "16 Apr, 2024",
      readTime: "6 Min Read",
      views: 3579,
      image: dataScienceImg5,
    },
    {
      title: "How Long Would It Take to Learn Data Science?",
      author: "Meghana D",
      date: "16 Apr, 2024",
      readTime: "4 Min Read",
      views: 2935,
      image: dataScienceImg6,
    },
    {
      title: "Everything about Data Scientist Salary in India | 2024",
      author: "Srinithi Sankar",
      date: "02 Apr, 2024",
      readTime: "5 Min Read",
      views: 2724,
      image: dataScienceImg7,
    },
    {
      title: "How to become a Data Scientist after Mechanical Engineering?",
      author: "Lahari Chandana",
      date: "16 Apr, 2024",
      readTime: "3 Min Read",
      views: 2541,
      image: dataScienceImg8,
    },
    {
      title: "10 Best Data Science Online Courses for Beginners | 2024",
      author: "Srinithi Sankar",
      date: "02 Apr, 2024",
      readTime: "7 Min Read",
      views: 2341,
      image: dataScienceImg9,
    },
  ];

  return (
    <div className="container">
      <h1>Data Science</h1>
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

export default DataScience;
