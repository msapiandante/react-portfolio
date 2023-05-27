import React from 'react';
import resumePDF from '../images/M. Sapiandante resume.pdf'; 

  function Resume() {
    return (
      <div className='container'>
        <div className='row justify-content'>
        <div className="card card-resume col-md-4 mt-4 col-sm-12">
            <div className="card-header">
              <h2> Technical Skills</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>Git</li>
                <li>Bootstrap</li>
                <li>DOM Manipulation</li>
                <li>APIs</li>
                <li>jQuery</li>
                <li>JSON</li>
                <li>AJAX</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                <li>MySQL or other database system</li>
                <li>MVC Paradigm Testing (unit testing, integration testing, etc.)</li>
                <li>NoSQL databases</li>
                <li>Computer Science Fundamentals (data structures, algorithms, etc.)</li>
              </ul>
            </div>
          </div>
  
          <div className="card col-md-4 mt-4 col-sm-12">
            <div className="card-header">
              <h2> Soft Skills</h2>
            </div>
            <div className="card-body">
              <ul>
                <li>Adaptability</li>
                <li>Strong Interpsonal Communication</li>
                <li>Creative Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='resumeDownload'>
        <a href={resumePDF} download>Download Resume Here</a>
  </div>
      </div>
    );
  }
  
  export default Resume;