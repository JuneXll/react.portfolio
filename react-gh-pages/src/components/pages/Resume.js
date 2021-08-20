import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Resume= ()=>{
    return (
        <Container>
            
            <Row className='my-5'>
                <Col>
                    <h4 className='text-light mb-3'>Languages</h4>
                    <ul className='text-light'>
                        <li>JavaScript(React.js and Node.js)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>GraphQL</li>
                    </ul>
                </Col>
                <Col>
                    <h4 className='text-light mb-3'>Developer Tools</h4>
                        <ul className='text-light'>
                            <li>jQuery</li>
                            <li>Bootstrap(React-Bootstrap)</li>
                            <li>Bulma</li>
                            <li>GitHib</li>
                            <li>GitLab</li>
                            <li>Slack</li>
                            <li>Visual Studio Code</li>
                        </ul>
                </Col>
            </Row>

            <Container className='mt-5 d-flex justify-content-center'>
                <a className='text-light fs-1' href='./assets/WD Resume.pdf' download>Click to download my Resume!</a>
            </Container>

        </Container>
    )


}

export default Resume;