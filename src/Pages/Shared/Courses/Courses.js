import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import LeftSideCourses from '../LeftSideCourses/LeftSideCourses';

const Courses = () => {
    
    return (
        <Container>
                <Row>
                  <Col lg='3' className='d-none d-lg-block'>
                  <LeftSideCourses></LeftSideCourses>
                  </Col>
                  <Col lg='9'>
                    <Home></Home>
                  </Col>
                </Row>

            
        </Container>
    );
};

export default Courses;