import React from 'react'
import {Row,Col,Button} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import './Home.css'
import BackGroundImage from '../assets/background.jpg'
const Home=()=>{
return(
 <Row>
    <Col md={6} style={{padding:'50px'}}
    className="d-flex flex-direction-column align-items-center justify-content-center"
    >
        <div >
            
            <h1 style={{height:'120px'}}>
                Share the world with your friends
            </h1>
            <p>
                Chat App lets you connect with your friends

            </p>
            <Button style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'150px'}} variant='success' >Get Started<i class="fa fa-comments" aria-hidden="true"></i></Button>

        </div>
    </Col>
    <Col md={6}>
        <img className='homeBackgroundImage' src={BackGroundImage} ></img>
    </Col>
 </Row>
)

}

export default Home;