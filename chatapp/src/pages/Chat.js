import React from 'react'
import Sidebar from '../components/Sidebar';
import MessageForm from '../components/MessageForm';
import { Container, Row, Col } from 'react-bootstrap'
const Chat = () => {
    return (
        <Container>
            <Row>
                <Col md={4}>
                    <Sidebar>
                    </Sidebar>
                </Col>
                <Col md={8}>
                    <MessageForm></MessageForm>
                </Col>
            </Row>
        </Container>
    )

}

export default Chat;