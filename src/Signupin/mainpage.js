import React from 'react';
//import { Link } from 'react-router-dom';
import "./design/mainpage.css";
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import doctor from './design/images/Doctor.jpg'; 
import patient from './design/images/Patient.jpeg'
import admin from './design/images/Admin.jpeg';
import newlogo from './design/images/neww.jpg'
import dem from './design/images/dem.jpg'
import connectt from './design/images/connecttt.jpg'





function console() {
  /*<Link  to="http://localhost:8001/patient">
    <Button variant="danger">I am a Patient</Button>
    </Link>*/
  return (
    <div>
  <div className="imagefix">
 <Carousel >
  <Carousel.Item>
    <img
    /*width={1000} height={500} alt="100x500"*/
     alt="100x500"
      className="d-block w-100"
      src={newlogo}
    />
    <Carousel.Caption>
      <h2 className="font-loader">Always In Your Favor</h2>
      <h2 className="loaders">Emergency@ 080-28388367 / 9876543210</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      alt="100x500"
      className="d-block w-100"
      src={dem}
    />

    <Carousel.Caption>
    <p>Always ready to assist you 24 X 7</p>
    <h2 className="loaders">Emergency@ 080-28388367 / 9876543210</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
       alt="100x500"
      className="d-block w-100"
      src= {connectt}
    />

    <Carousel.Caption>
      <p>Contact us : youraid2022@gmail.com / 9876543210</p>
      <h2 className="loaders">Emergency@ 080-28388367 / 9876543210</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
   
{/*rows and Cards*/}
<Row xs="auto">
    <Col><div className="one">
    <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={patient} />
  <Card.Body>
    <Card.Title>Patient</Card.Title>
    <Card.Text>
      This section is for Patient login and Sign-Up  
    </Card.Text>
    <Button variant="danger" href="http://localhost:8001/patient">I am a Patient</Button>
  </Card.Body>
</Card>
</div></Col>
    <Col><div className="two">
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={doctor} />
  <Card.Body>
    <Card.Title>Doctor</Card.Title>
    <Card.Text>
    This section is for Doctor login and Sign-Up  
    </Card.Text>
    <Button variant="primary" href="http://localhost:8001/doc">I am a Doctor</Button>
  </Card.Body>
</Card>
</div></Col>
    <Col><div className="three">
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={admin} />
  <Card.Body>
    <Card.Title>Admin</Card.Title>
    <Card.Text>
      This section is only for 
      Administrator Login
    </Card.Text>
    <Button variant="success" href="http://localhost:8001/admin">I am an Admin</Button>
  </Card.Body>
</Card>
</div></Col>
  </Row>
    </div>
  );
}

export default console;