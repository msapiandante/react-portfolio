import React from 'react';

const styles = {
  name: {
    marginTop: '50px',
    fontSize: '50px',
    color: 'black',
    paddingTop: 85,
    fontFamily: 'Rockwell, Courier Bold, Courier',
  },
  subtitle: {
    color: 'black',
    fontSize: '20px',
    fontFamily: 'Rockwell, Courier Bold, Courier',
    fontStyle: 'italic'
  }
}

export default function Nav({ currentPage, handlePageChange }) {
  return (

    <div className="header">
      <h1 style={styles.name}>Melanie Sapiandante</h1>
      <p style={styles.subtitle}>FullStack Developer</p>
      <nav className="navbar justify-content-end">
        <ul className="nav nav">
          <li className="nav-item">
            <a
              href="#AboutMe"
              onClick={() => handlePageChange("AboutMe")}
              className={
                currentPage === "AboutMe" ? "nav-link active" : "nav-link"
              }
            >
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#Resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            > 
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};