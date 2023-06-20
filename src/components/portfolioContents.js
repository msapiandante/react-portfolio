import React, { useState } from 'react';
import Nav from '../Nav'
import AboutMe from '../components/aboutMe';
import Portfolio from '../components/portfolio';
import Contact from '../components/contactInfo';
import Resume from '../components/resume'
import Footer from '../footer'

function PortfolioContents() {
    //sets current page state to default of About Me
    const [currentPage, setCurrentPage] = useState('AboutMe');
    //renders pages based on what the current page is
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio Projects={Projects} />;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        if (currentPage === 'Resume') {
            return <Resume/>;
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div>
            <Nav currentPage = {currentPage} handlePageChange={handlePageChange}/>
            {/* <Header></Header> */}
            {renderPage()}
            <Footer></Footer>
            </div>
        
    );
}
export default PortfolioContents;