import React, { useState } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

const marginBottom = {
    marginBottom: '8rem'
}

const Contact=()=>{
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const [message,setMessage]=useState('');

    const encode= (data)=>{
        return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
    }

    const handleSubmit=(event)=> {
        event.preventDefault();
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", firstName, lastName, email, message }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }

    return(
        <Container style={marginBottom}>
            <Container className='my-5'>
                <h2 className='text-light'>Hire Me</h2>
                <p className='text-light'>Weather you link up with me through social media or send me a message, I will get back with you as soon as possible!</p>
            </Container>
            <Row className='my-5 d-flex align-self-center'>
                <Col className='d-flex justify-content-center'>
                    <a href="https://www.linkedin.com/in/juniettehernandez/" target="_blank"><i className="fab fa-linkedin fa-5x text-light"></i></a>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <a href="https://github.com/JuneXll" target="_blank"><i className="fab fa-github-square fa-5x text-light"></i></a>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <a href="https://twitter.com/JunebugXll" target="_blank"><i className="fab fa-twitter-square fa-5x text-light"></i></a>
                </Col>
               
            </Row>

            <Form className='my-5' netlify name='contact' onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-light'>First Name</Form.Label>
                            <Form.Control 
                                name='firstName' 
                                onChange={(event)=>setFirstName(event.target.value)}
                                type="text" 
                                placeholder="John" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label className='text-light'>Last Name</Form.Label>
                            <Form.Control 
                            name='lastName' 
                            onChange={(event)=>setLastName(event.target.value)}
                            type="text" 
                            placeholder="Doe" />
                        </Form.Group>
                    </Col>
                </Row>

                
                <Form.Group className="mb-3">
                    <Form.Label className='text-light'>Email address</Form.Label>
                    <Form.Control 
                    name='email' 
                    onChange={(event)=>setEmail(event.target.value)}
                    type="email" 
                    placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label className='text-light'>Message</Form.Label>
                    <Form.Control 
                    name='message'
                    nChange={(event)=>setMessage(event.target.value)} as="textarea" 
                    rows={3} />
                </Form.Group>

                <Form.Group className="mb-3 float-end" controlId="formBasicCheckbox">
                    <Button variant='success' type="submit" onSubmit={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
  
            </Form>   
            
        </Container>
    )
}

export default Contact;


 