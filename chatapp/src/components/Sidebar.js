import React from 'react'
import { ListGroup } from 'react-bootstrap';
const Sidebar=()=>{
const rooms=['first room','second room','third room','fourth room',]
    return(
    <>
    <h2>Available Rooms</h2>
    <ListGroup>
{rooms.map((item,index)=>{
    <ListGroup.Item key={index}>{item}</ListGroup.Item>

})}
    </ListGroup>
    <h2>Members</h2>
    </>
)

}

export default Sidebar;