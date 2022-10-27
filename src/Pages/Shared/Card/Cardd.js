import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Cardd = ({course}) => {
    const {id,name,image_url}=course;
    return (
        <div>
            <Card  style={{ width: '18rem'} } >
          <Card.Img style={{height:'14rem' } }  variant="top" src={image_url} />
          <Card.Body>
          <Card.Title><Link class='text-decoration-none text-center ps-5' to={`/category/${id}`}>{name}</Link></Card.Title>
          </Card.Body>
        </Card>
        </div>
      );
};

export default Cardd;