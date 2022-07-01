import React,{useState} from 'react'
import { Form, Button ,Row,Col,Container} from 'react-bootstrap'
import BackGroundImage from '../assets/background.jpg'
import {Link} from 'react-router-dom'
import './LogIn.css'

const LogIn = () => {
    const [loader,setLoader]=useState(true)
    const [info, setinfo] = useState({
        email: "",
        password: "",
    });
    const inputhandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinfo({ ...info, [name]: value });
    };
    function submit(e){
        e.preventDefault()
console.log(info)
    }
    return (
        <Container>
            <Row>
                <Col md={5}>
                    <img  className='logInBackgroundImage' src={BackGroundImage}></img>
                </Col>
                <Col 
                className="d-flex flex-direction-column align-items-center justify-content-center"
                
                md={7}>
                    <Form
                    style={{width:'80%',maxWidth:500}}
                    >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={info.email} onChange={inputhandler}/>
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  name="password" value={info.password} onChange={inputhandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button onClick={(e)=>submit(e)} variant="primary" type="submit">
                            LogIn
                        </Button>
                        <div className='py-4' style={{display:'flex',justifyContent:'center'}}>
                            <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container>
    )

}

export default LogIn;