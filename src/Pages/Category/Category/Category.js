import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {  Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Category = () => {
    const Cdetails = useLoaderData();
    const {category_id,title,details,image_url,rating,total_view,author}=Cdetails;
    const {ttopic,tddetails,types,list}=details;
    const {A,B,C,D}=list;
    
    return (
        <Container>
            <div class='text-center'>
           <header>
           <Nav className="justify-content-end">
        <Nav.Item>
          <Nav.Link href="/home"><FontAwesomeIcon  className='flex-none mr-4' icon={faDownload}></FontAwesomeIcon></Nav.Link>
        </Nav.Item>
      </Nav>
           </header>
           
               <div>
                    <p class='text-decoration-underline fw-bold text-warning'>{title}</p>
                    <Image src={image_url} fluid/>
                    <p class='fw-bold text-decoration-underline'>{ttopic}</p>
                    <p>{tddetails}</p>
                    <p class='fw-bold text-decoration-underline'>{types}</p>
                    <ul>
                        <li>
                            {A}
                        </li>
                        <li>
                            {B}
                        </li>
                        <li>
                            {C}
                        </li>
                        <li>
                            {D}
                        </li>
                    </ul>
               </div>
           </div>
           <Button variant="primary"><Link className='text-white' to={`/checkout/${category_id}`}>Get Premimum Eccess</Link></Button>
        </Container>
    );
};

export default Category;