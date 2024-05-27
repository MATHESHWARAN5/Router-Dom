// import React from 'react'

// const AllCourses = () => {
//   return (
//     <div>AllCourses</div>
//   )
// }

// export default AllCourses



// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faClock, faEye } from '@fortawesome/free-solid-svg-icons';
// import exampleImage from './images/person-front-computer-working-html.jpg';
// import projectIdeasImg from './images/All-2.webp';
// import developerImg from './images/All-3.jpg';
// import apacheImg from'./images/All-4.webp';
// import databaseImg from './images/All-5.webp';
// import syllabusImg from './images/All-6.webp';
// import reactImg from './images/All-7.jpg';
// import frameworksImg from './images/All-8.jpeg';
// import roadmapImg from './images/All-9.webp';

// import './AllCourses.css';

// const AllCourses = () => {
//   const articles = [
//     {
//       title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
//       author: "Tarun Singh",
//       date: "21 Mar, 2024",
//       readTime: "5 Min Read",
//       views: 89936,
//       // image: "/person-front-computer-working-html.jpg",
//       image: exampleImage,
//     },
//     {
//       title: "How to Render an Array of Objects in React? [in 3 easy steps]",
//       author: "Tarun Singh",
//       date: "21 Mar, 2024",
//       readTime: "7 Min Read",
//       views: 85921,
//       image: projectIdeasImg ,
//     },
//     // Add more articles similarly
//     {
//       title: "Top 10 Unique Project Ideas for College Students",
//       author: "Lukesh S",
//       date: "21 Mar, 2024",
//       readTime: "7 Min Read",
//       views: 73924,
//       image: developerImg ,
//     },
//     {
//       title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
//       author: "Srinithi Sankar",
//       date: "25 Mar, 2024",
//       readTime: "6 Min Read",
//       views: 62741,
//       image: apacheImg,
//     },
//     {
//       title: "20 Mechanical Engineering Project Ideas",
//       author: "Meghana D",
//       date: "25 Mar, 2024",
//       readTime: "9 Min Read",
//       views: 53224,
//       image: databaseImg  ,
//     },
//     {
//       title: "10 Hardest and Easiest Programming Languages in 2024",
//       author: "Saakshi Priyadarshini",
//       date: "18 May, 2024",
//       readTime: "6 Min Read",
//       views: 49867,
//       image: syllabusImg ,
//     },
//     {
//       title: "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
//       author: "Saakshi Priyadarshini",
//       date: "25 Mar, 2024",
//       readTime: "8 Min Read",
//       views: 48448,
//       image: reactImg,
//     },
//     {
//       title: "40 Java Interview Questions for Freshers with Clear & Concise Answers",
//       author: "Tushar Vinocha",
//       date: "22 Mar, 2024",
//       readTime: "5 Min Read",
//       views: 37176,
//       image: frameworksImg,
//     },
//     {
//       title: "Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]",
//       author: "Archana",
//       date: "25 Mar, 2024",
//       readTime: "7 Min Read",
//       views: 30836,
//       image:roadmapImg,
//     }
  
//   ];

//   return (
//     <div className="container">
//       <h1>Trending Articles</h1>
//       <div className="row">
//         {articles.map((article, index) => (
//           <div key={index} className="col-md-4 mb-4">
//             <div className="card">
//               <img src={article.image} className="card-img-top" alt="Article" />
//               <div className="card-body">
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text">By {article.author}</p>
//                 <p className="card-text">{article.date}</p>
//                 <p className="card-text">
//                   <FontAwesomeIcon icon={faClock} /> {article.readTime} &nbsp;
//                   <FontAwesomeIcon icon={faEye} /> {article.views}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllCourses;






import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, } from '@fortawesome/free-solid-svg-icons';
// import { faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook, faInstagram, faLinkedin, faTelegram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import exampleImage from './images/Allfront.webp';
import projectIdeasImg from './images/All-2.webp';
import developerImg from './images/All-3.jpg';
import apacheImg from'./images/All-4.webp';
import databaseImg from './images/All-5.webp';
import syllabusImg from './images/All-6.webp';
import reactImg from './images/All-7.jpg';
import frameworksImg from './images/All-8.jpeg';
import roadmapImg from './images/All-9.webp';

import './AllCourses.css';

const AllCourses = () => {
  const articles = [
    {
      title: "Use ReactJS to Fetch and Display Data from API – 5 Simple Steps",
      author: "Tarun Singh",
      date: "21 Mar, 2024",
      readTime: "5 Min Read",
      views: 89936,
      // image: "/person-front-computer-working-html.jpg",
      image: exampleImage,
    },
    {
      title: "How to Render an Array of Objects in React? [in 3 easy steps]",
      author: "Tarun Singh",
      date: "21 Mar, 2024",
      readTime: "7 Min Read",
      views: 85921,
      image: projectIdeasImg ,
    },
    // Add more articles similarly
    {
      title: "Top 10 Unique Project Ideas for College Students",
      author: "Lukesh S",
      date: "21 Mar, 2024",
      readTime: "7 Min Read",
      views: 73924,
      image: developerImg ,
    },
    {
      title: "Top 30 Mini Project Ideas For College Students [UPDATED]",
      author: "Srinithi Sankar",
      date: "25 Mar, 2024",
      readTime: "6 Min Read",
      views: 62741,
      image: apacheImg,
    },
    {
      title: "20 Mechanical Engineering Project Ideas",
      author: "Meghana D",
      date: "25 Mar, 2024",
      readTime: "9 Min Read",
      views: 53224,
      image: databaseImg  ,
    },
    {
      title: "10 Hardest and Easiest Programming Languages in 2024",
      author: "Saakshi Priyadarshini",
      date: "18 May, 2024",
      readTime: "6 Min Read",
      views: 49867,
      image: syllabusImg ,
    },
    {
      title: "30 Best JavaScript Project Ideas For You [3 Bonus Portfolio Projects]",
      author: "Saakshi Priyadarshini",
      date: "25 Mar, 2024",
      readTime: "8 Min Read",
      views: 48448,
      image: reactImg,
    },
    {
      title: "40 Java Interview Questions for Freshers with Clear & Concise Answers",
      author: "Tushar Vinocha",
      date: "22 Mar, 2024",
      readTime: "5 Min Read",
      views: 37176,
      image: frameworksImg,
    },
    {
      title: "Top 9 TCS Xplore Python Coding Questions [DeCode with GUVI]",
      author: "Archana",
      date: "25 Mar, 2024",
      readTime: "7 Min Read",
      views: 30836,
      image:roadmapImg,
    }
  
  ];

  return (
    <div className="container">
      <h1>Trending Articles</h1>
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
        <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>Blog Categories</h3>
              <ul>
                <li>Data Science</li>
                <li>AI & ML</li>
                <li>Blockchain</li>
                {/* Add more categories */}
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Salary blog</h3>
              <ul>
                <li>UI/UX Designer Salary</li>
                <li>Data Scientist Salary</li>
                <li>Full-Stack Developer Salary</li>
                {/* Add more salary categories */}
              </ul>
            </div>
            <div className="col-md-4">
              <h3>About us</h3>
              <ul>
                <li>Our Story</li>
                <li>Careers</li>
                <li>Refund Policy</li>
                {/* Add more about us links */}
              </ul>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>GUVI – India’s Pioneering Vernacular EdTech, incubated by IIT-M, IIM-A, and a prestigious part of the HCL group. Empowering over 2.5 million global learners with top-tier educational solutions through a vernacular approach, we have revolutionized global tech education with strategic partnerships, including 'Google for Education,' AICTE, AWS, Google Cloud, IIT-M Pravartak, UiPath, and NASSCOM. GUVI is your trusted guide to inclusive and accredited learning experiences.</p>
            </div>
            <div className="col-md-6">
              <div className="social-icons">
                <span>Follow us on:</span>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-youtube"></i>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <p>Terms and Conditions | Privacy Policy</p>
            </div>
            <div className="col-md-6">
              <p>© GUVI Geeks Network Pvt. Ltd</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
       
    </div>
  );
};

export default AllCourses;

