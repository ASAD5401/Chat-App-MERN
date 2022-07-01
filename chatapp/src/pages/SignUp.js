import React from 'react'
import { Form, Button, Row, Col, Container,Spinner } from 'react-bootstrap'
import BackGroundImage from '../assets/background.jpg'
import { Link } from 'react-router-dom'
import './SignUp.css'
import SignUpImage from '../assets/signUpAvatar.png'
import { useState } from "react"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyANmkBYl9qEILynIP2Qx1fathoqxJEwl9o",
    authDomain: "chatapp-b6429.firebaseapp.com",
    projectId: "chatapp-b6429",
    storageBucket: "chatapp-b6429.appspot.com",
    messagingSenderId: "483712464256",
    appId: "1:483712464256:web:773e7d15bd0a54748c3d65",
    measurementId: "G-JHCQ1HNE29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
const storage = getStorage(app);


const SignUp = () => {
    const [loader,setLoader]=useState(true)
    const [info, setinfo] = useState({
        fullName: "",
        email: "",
        password: "",
        image: ''
    });
    const [image, setImage] = useState()
    const inputhandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setinfo({ ...info, [name]: value });
     

    };
    function submit(e) {
        setLoader(false)
        e.preventDefault()
        console.log(info)
        console.log(image)
        try{
            const storageRef = ref(storage, `/files/${image.name}`)
            const uploadTask = uploadBytesResumable(storageRef, image);
            uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        break;
                    case 'storage/canceled':
                        break;
                    case 'storage/unknown':
                        break;
                }
                setLoader(true)

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File available at', downloadURL);
                    setLoader(true)
                });
            }
        );
        }catch{
            setLoader(true)
 
        }   
    }
    return (
        <Container>
            <Row>

                <Col
                    className="d-flex flex-direction-column align-items-center justify-content-center"

                    md={7}>
                    <Form style={{ width: '80%', maxWidth: 500 }}>
                        <h1 style={{ height: '60px' }} className="text-center">Create Account</h1>
                        <div style={{ width: "100%", display: 'flex', justifyContent: 'center' }}>
                            <label style={{ border: '5px black solid', padding: '10px' }} for="upload-photo">
                                <input type="file" name="image" id="upload-photo" onChange={(e) => setImage(e.target.files[0])} >
                                </input>
                                <div style={{ width: "100%" }} className='signUpAvatar'>
                                    <img width="150px" height="150px" src={image ? URL.createObjectURL(image) : SignUpImage}></img>
                                </div>

                            </label>
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" name="fullName" value={info.fullName} onChange={inputhandler} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Your Email" name="email" value={info.email} onChange={inputhandler} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Your Password" name="password" value={info.password} onChange={inputhandler} />
                        </Form.Group>

                        <Button style={{height:50,width:300}} onClick={(e) => { submit(e) }} variant="primary" type="submit">
                            {loader?'SignUp':<Spinner  hidden={loader} animation="border" role="status">
                            </Spinner>}
                            
                        </Button>
                        <div className='py-4' style={{ display: 'flex', justifyContent: 'center' }}>
                            <p>Already have an account <Link to="/login">Log In</Link></p>
                        </div>
                    </Form>
                </Col>
                <Col md={5}>
                    <img className='signUpBackgroundImage' src={BackGroundImage}></img>
                </Col>
            </Row>
        </Container>
    )

}

export default SignUp;