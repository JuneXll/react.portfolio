import React from 'react';
import ProjectCards from './ProjectCards';
import { Container } from 'react-bootstrap';

const marginBottom = {
    marginBottom: '5rem'
}

const Projects= ()=>{
    return (
        <Container style={marginBottom}>
            <Container>
                <Container className="my-5 w-100">
                    <h1 className="my-3 text-white">Projects</h1>
                </Container>
                <ProjectCards/>
            </Container>
        </Container>
    )

}

export default Projects;