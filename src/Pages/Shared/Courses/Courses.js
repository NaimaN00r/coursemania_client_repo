import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../../Home/Home';
import Footer from '../Footer/Footer';
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