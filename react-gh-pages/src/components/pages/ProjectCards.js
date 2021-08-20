import React from './ProjectCards.js';
import { projects } from '../../data';
import { Row, Col, Image, Card } from 'react-bootstrap';

const anchorStyle = {
    textDecoration: 'none',
    color: '#b78763'
}
const cardStyle = {
    background: '#f9f7f1',
    color: '#b78763',
}

const ProjectCards = () => {
    return (
        <Row xs={1} m={2} xl={3} className="g-4">
            {projects.map((project)=>(
                <Col>
                    <Card style={cardStyle}>
                        <a href={project.link} style={anchorStyle} key={project.image}>
                            <Card.Img src={project.image} alt="project"/>
                        </a>
                        <Card.Body>
                            <Card.Title>
                                {project.title}
                            </Card.Title>
                            <Card.Subtitle>
                                {project.subtitle}
                            </Card.Subtitle>
                            <Card.Text>
                                <h5 className='d-flex flex-wrap ml-3'>GitHub Repository</h5>
                                <a style={anchorStyle} href={project.github}><i className="fas fa-arrow-right"></i> </a>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}      
        </Row>
    )
}

export default ProjectCards;



 
