import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSideCourses from '../Pages/Shared/LeftSideCourses/LeftSideCourses';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                  <Col lg='4' className='d-none d-lg-block'>
                  <LeftSideCourses></LeftSideCourses>
                  </Col>
                  <Col lg='8'>
                  <Outlet></Outlet>
                  </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;