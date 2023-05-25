import React, {useState} from 'react';
import Header from '../header'
import AboutMe from '../components/aboutMe';
import Portfolio from '../components/portfolio';
import Contact from '../components/contactInfo';
import Resume from '../components/resume';
import Footer from '../footer'
import '../src/App.css';
import Project from '../project'

function PortfolioContents() {
    //sets current page state to default of About Me
    const [currentPage, setCurrentPage] = useState('AboutMe');
    //renders pages based on what the current page is
    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio Project={Project}/>;
        }
        if (currentPage === 'Contact') {
            return <Contact/>;
        }
        return <Resume/>
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        //adds NavTabs and Footer components
        <div>
            <Nav currentPage = {currentPage} handlePageChange={handlePageChange}/>
            <Header></Header>
            {renderPage()}
            <Footer></Footer>
            </div>
        
    );
}
export default PortfolioContents;