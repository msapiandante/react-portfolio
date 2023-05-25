import React, {useState} from 'react';
import Header from '../src/header'
import AboutMe from '../src/components/aboutMe';
import Portfolio from '../src/components/portfolio';
import Contact from '../src/components/contactInfo';
import Resume from '../src/components/resume';
import Footer from '../src/footer'
import '../src/App.css';
import projects from '../utils/projects'

function PortfolioContents() {
    //sets current page state to default of About Me
    const [currentPage, setCurrentPage] = useState('AboutMe');
    //renders pages based on what the current page is
    const renderPage = () => {
        if(currentPage === 'AboutMe') {
            return <AboutMe/>;
        }
        if(currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>;
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