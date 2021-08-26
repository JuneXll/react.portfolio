import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePic from '../../images/profile-pic.JPG';

const p = {
    textIndent: '12px',
    color: 'white'
}

const About = ()=>{
    return (
        <Container lg={8} md={6} s={12} >
            <Container className='my-5'>
                <h1 className='text-white'>About Me</h1>
            </Container>
            <Row className="d-flex justify-content-center m-5">
                <Col className='d-flex align-content-center pb-3'> 
                    <Container>
                        <Image rounded className="d-flex justify-content-center" src={profilePic} alt="profile-pic"width="270px" height="350px"/>
                    </Container>
                </Col>
                <Col className='d-flex align-self-center'>
                    <Container>
                        <p  style={p}>
                        I am a Miami based Web Developer. As a novice developer, I am continuously learning new techniques to sharpen my skills. I strive for quality and excellence. I enjoy providing structure and order to all of my projects and maximizing user experience. Working on a team is always a rewarding endeavor, but I am definitely not afraid to get down to the nitty gritty and work on projects independently.
                        </p>
                    </Container>
                </Col>
            </Row>
            
        </Container>
    );  
    
}

export default About;