import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const background = {
    backgroundColor: '#E3DFC8'
}


const Navigation = ({currentPage,handlePageChange})=>{
    return (
        <div>
            <nav style={background} className="navbar navbar-expand-lg">
            <ul className="nav">
                <li className="navbar-brand">
                    <a href="#about" onClick={()=>handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active link-success' : 'nav-link link-secondary'}>
                        June Hernandez
                    </a>
                </li>
            </ul>
            <ul className="nav justify-content-end">
                <li className="nav-item"> 
                    <a href="#projects" onClick={()=>handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active link-success' : 'nav-link link-secondary'}>
                      Past Work
                    </a>
                </li> 
                <li className="nav-item">
                    <a href="#resume" onClick={()=>handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active link-success' : 'nav-link link-secondary'}>
                        Resume
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active link-success' : 'nav-link link-secondary'}>
                        Hire Me
                    </a>
                </li>
            </ul>
        </nav>
        </div>
    )
}

export default Navigation;

//Not sure why it wont work with the following code

{/* <Navbar style={background}>
            <Container>
                <Nav.Brand href="#about"onClick={()=>handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active link-secondary' : 'nav-link link-light'}>
                    June Hernandez
                    </Nav.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href="#projects" onClick={()=>handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active link-secondary' : 'nav-link link-light'}>
                        Past Work
                    </Nav.Link>
                    <Nav.Link href="#resume" onClick={()=>handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active link-secondary' : 'nav-link link-light'}>
                        Resume
                    </Nav.Link>
                    <Nav.Link href="#contact" onClick={()=>handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active link-secondary' : 'nav-link link-light'}>
                        Hire Me
                    </Nav.Link>         
                </Nav>
            </Container>
        </Navbar> */}