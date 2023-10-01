import React, { useState } from 'react';
import Nav from './Nav';
import AboutMe from './aboutMe';
import Portfolio from './portfolio';
import Contact from './contactInfo';
import Resume from './resume';
import Footer from '../footer';
import Projects from './portfolio';

function PortfolioContents() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={Projects} />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default PortfolioContents;