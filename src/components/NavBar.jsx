// // src/components/Navbar.js
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container">
//         <NavLink className="navbar-brand" to="/">GUVI</NavLink>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink exact className="nav-link" to="/">All</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/fullstack">Full Stack Development</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/datascience">Data Science</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/cybersecurity">Cyber Security</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/career">Career</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faDatabase, faShieldAlt, faBriefcase, faHome } from '@fortawesome/free-solid-svg-icons';
import '../Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <NavLink className="navbar-brand" to="/">GUVI</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink exact className="nav-link" to="/">
                <FontAwesomeIcon icon={faHome} /> All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fullstack">
                <FontAwesomeIcon icon={faLaptopCode} /> Full Stack Development
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/datascience">
                <FontAwesomeIcon icon={faDatabase} /> Data Science
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cybersecurity">
                <FontAwesomeIcon icon={faShieldAlt} /> Cyber Security
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/career">
                <FontAwesomeIcon icon={faBriefcase} /> Career
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


