import React from 'react';
import './consult.css';
import { Row, Card} from 'react-bootstrap';
import a from './img/doc/1.jpeg';
import b from './img/doc/2.jpeg';
import c from './img/doc/3.jpeg';
import d from './img/doc/4.jpeg';




function comp()
{
    return(<div className="forall margin">
        <h1 style={{ color: 'maroon' }}>Contact Your-Aid Engineers</h1>
        <br></br>
<Row xs={1} md={4} className="g-4">
  <Card /*</Row>border="primary"*/ style={{ width: '18rem' ,height :'20rem'}}>
  <Card.Img variant="top" src={a} />
</Card> 
<Card.Body>
    <Card.Title><h1>Abhishek Kumar Singh</h1></Card.Title>
    <Card.Text>
      <h5 style={{ color: 'blue' }} >5 years of experience. * abhidcoder@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Over the years I have learnt coding and became proficient in Data Structures, Python, C++ and learnt Java, Php, Javavscript in languages, as developing is my passion I have made lot of projects and Your-Aid is one of the special project I have worked on. For assistance call@: 8105216079 "
    </Card.Text>
  </Card.Body>
</Row>  
<br></br>
<br></br>
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card /*</Row>border="primary"*/ style={{ width: '18rem' ,height :'20rem'}}>
  <Card.Img variant="top" src={b} />
</Card> 
<Card.Body>
    <Card.Title><h1>Idrees Khan</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>4 years of experience. * idreeskhan@hotmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Your-Aid is one of the best project I have got a chance to work on. I have worked on features like Machine Diagnosis for more assistance call@ 080-28388367"
    </Card.Text>
  </Card.Body>
</Row> 
<br></br>
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card /*</Row>border="primary"*/ style={{ width: '18rem' ,height :'20rem'}}>
  <Card.Img variant="top" src={c} />
</Card> 
<Card.Body>
    <Card.Title><h1>Farhan Pasha</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>2 years of experience. * forevercian22@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Your-Aid is simply the best as I have got a chance to work on Front End for more assistance call@ 978767000"
    </Card.Text>
  </Card.Body>
</Row>  
<br></br>
<br></br>
<Row xs={1} md={4} className="g-4">
  <Card /*</Row>border="primary"*/ style={{ width: '18rem' ,height :'20rem'}}>
  <Card.Img variant="top" src={d} />
</Card> 
<Card.Body>
    <Card.Title><h1>Awadhesh Raja</h1></Card.Title>
    <Card.Text>
    <h5 style={{ color: 'blue' }}>3 years of experience. * rajaoo@gmail.com</h5>
    </Card.Text>
    <Card.Text>
    "Your-Aid is Simply the BEST for any assistance call@ 9765123400."
    </Card.Text>
  </Card.Body>
</Row>
<br></br>
<br></br>            
    </div>)
}

export default comp;