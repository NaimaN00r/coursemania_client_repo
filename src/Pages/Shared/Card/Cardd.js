import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Cardd = ({course}) => {
    const {id,name,image_url}=course;
    return (
        <div>
            <Card  style={{ width: '18rem' } } >
          <Card.Img variant="top" src={image_url} />
          <Card.Body>
            
          <Card.Title><Link to={`/category/${id}`}>{name}</Link></Card.Title>
          </Card.Body>
        </Card>
        </div>
      );
};

export default Cardd;