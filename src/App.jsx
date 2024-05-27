// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import AllCourses from './AllCourses';
// import FullStackDevelopment from './FullStackDevelopment';
// import DataScience from './DataScience';
// import CyberSecurity from './CyberSecurity';
// import Career from './Career';


// function App() {
//   return (
//     <div style={{width:"100vw",height:"100vh"}} >

//     <Router>
     
//         <nav>
//           <ul>
//             <li>

//               <Link to="/">All</Link>
              
//             </li>
//             <li>
//               <Link to="/full-stack-development/">Full Stack Development</Link>
//             </li>
//             <li>
//               <Link to="/data-science/">Data Science</Link>
//             </li>
//             <li>
//               <Link to="/cyber-security/">Cyber Security</Link>
//             </li>
//             <li>
//               <Link to="/career/">Career</Link>
//             </li>
//           </ul>
//         </nav>

//         <hr />
// <Routes>


//         <Route exact path="/" element={<AllCourses></AllCourses>} />
//         <Route path="/full-stack-development" element={<FullStackDevelopment/>} />
//         <Route path="/data-science" element={<DataScience></DataScience>} />
//         <Route path="/cyber-security" element={<CyberSecurity></CyberSecurity>} />
//         <Route path="/career" element={<Career/>} />
//         </Routes>
      
//     </Router>
//     </div>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import AllCourses from './AllCourses';
import FullStackDevelopment from './FullStackDevelopment';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<AllCourses />} />
          <Route path="/fullstack" element={<FullStackDevelopment />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
