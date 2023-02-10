import background from './background.jpg';
import portrait1 from './portrait1.jpg';
import portrait2 from './portrait2.jpg';
import portrait3 from './portrait3.jpg';
import portrait4 from './portrait4.jpg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function App() {
  return (
    <div>
      <div className="home-bar">
        <p className='home-title'>Mr. Caleb's Tutoring</p>
      </div>
      <div className="home-info">
        <p className='home-info-text'>(925)-597-7979 | rodriguezcaleb.bchs@gmail.com</p>
      </div>
      <Row className="row1">
        <Col className="column">
          <img className="desc-img" src={portrait2}></img>
        </Col>
        <Col xs={8} className="column">
          <p className='home-desc'>
            Tutoring
            <br></br><br></br>
            Meet Caleb Rodriguez, a multi-talented tutor who specializes in piano lessons but also offers expertise in English, spelling, math, and writing. With a passion for music and education, Caleb has dedicated himself to helping students of all ages reach their full potential.</p>
        </Col>
      </Row>
      <Row className="row2">
        <Col className="column">
          <img className="desc-img" src={portrait1}></img>
        </Col>
        <Col xs={8} className="column">
          <p className='home-desc'>
            Piano
            <br></br><br></br>
            Whether you're a beginner looking to learn the basics or an experienced musician looking to perfect your skills, Caleb's personalized approach will help you achieve your goals. Book your tutoring session with Caleb today and start your child’s journey towards becoming a confident and accomplished musician or student.</p>
        </Col>
      </Row>

    </div>
  );
}

export default App;
