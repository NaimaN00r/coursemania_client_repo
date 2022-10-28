import React, { useEffect } from 'react';
import {  useLoaderData, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {  Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const Category = () => {
    const cdetails = useLoaderData();
    console.log(cdetails);
    
    const {category_id,title,details,image_url}=cdetails;
    const {ttopic,tddetails,types,list}=details;
     const {A,B,C,D}=list;

    
    
    return (
        <Container>
            <div class='text-center'>
           <header>
           <Nav className="justify-content-end">
        <Nav.Item>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <Button variant='light' onClick={toPdf}><FontAwesomeIcon  className='flex-none mr-4' icon={faDownload}></FontAwesomeIcon></Button>}
      </Pdf> 
          {/* <Button  variant='light'><FontAwesomeIcon  className='flex-none mr-4' icon={faDownload}></FontAwesomeIcon></Button> */}
        </Nav.Item>
      </Nav>
           </header>
           
               <div ref={ref} class="bg-info bg-opacity-10">
                    <p class='text-decoration-underline fw-bold fs-2 text-warning pt-4'>{title}</p>
                    <Image style={{weidth:900 , height:500}} src={image_url} fluid/>
                    <p class='fw-bold text-decoration-underline pt-3 fs-3'>{ttopic}</p>
                    <p class="ps-4 pe-4">{tddetails}</p>
                    <p class='fw-bold text-decoration-underline fs-5'>{types}</p>
                    <ul class="list-group list-group-flush align-items-center">
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
               <Button variant="primary"><Link className='text-white' to={`/checkout/${category_id}`}>Get Premimum Eccess</Link></Button>
           </div> 
           
        </Container>
    );
};
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Category />, rootElement);

export default Category;