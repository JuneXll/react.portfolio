import React, { useState } from 'react';
import Navigation from './Navigation';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';


const PortfolioContainer=()=> {
    const [currentPage,setCurrentPage]=useState('About');

    const renderPage = () => {
        if(currentPage === 'About'){
            return <About/>
        }
        if(currentPage === 'Projects'){
            return <Projects/>
        }
        if(currentPage === 'Resume'){
            return <Resume/>
        }
        if(currentPage === 'Contact'){
            return <Contact/>
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        
        </div>
    );


}

export default PortfolioContainer;