import React from 'react'
import { Form, Button ,Row,Col,Container} from 'react-bootstrap'
import BackGroundImage from '../assets/background.jpg'
import {Link} from 'react-router-dom'
import './SignUp.css'
import SignUpImage from '../assets/signUpAvatar.png'

const SignUp = () => {
    return (
        <Container>
            <Row>

                <Col 
                className="d-flex flex-direction-column align-items-center justify-content-center"
                
                md={7}>
                    <Form style={{width:'80%',maxWidth:500}}>
                        <h1 style={{height:'60px'}} className="text-center">Create Account</h1>
                        <div className='signUpAvatar'>
                            <img width="150px" src={SignUpImage}></img>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            LogIn
                        </Button>
                        <div className='py-4' style={{display:'flex',justifyContent:'center'}}>
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </Form>
                </Col>
                <Col md={5}>
                    <img  className='signUpBackgroundImage' src={BackGroundImage}></img>
                </Col>
            </Row>
        </Container>
    )

}

export default SignUp;