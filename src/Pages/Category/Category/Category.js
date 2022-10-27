import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import {  Container, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink } from "@react-pdf/renderer";
import '../PDFFile'
import PDFFile from '../PDFFile';

const Category = () => {
    const Cdetails = useLoaderData();
    const {category_id,title,details,image_url,rating,total_view,author}=Cdetails;
    const {ttopic,tddetails,types,list}=details;
    const {A,B,C,D}=list;

    const onButtonClick = () => {
        <PDFDownloadLink document={<PDFFile />} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
      console.log("Hello")
    }
    
    
    return (
        <Container>
            <div class='text-center'>
           <header>
           <Nav className="justify-content-end">
        <Nav.Item>
          {/* <Nav.Link href="/home"><FontAwesomeIcon  className='flex-none mr-4' icon={faDownload}></FontAwesomeIcon></Nav.Link> */}
          <Button onClick={onButtonClick} variant='light'><FontAwesomeIcon  className='flex-none mr-4' icon={faDownload}></FontAwesomeIcon></Button>
        </Nav.Item>
      </Nav>
           </header>
           
               <div class="bg-info bg-opacity-10">
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

export default Category;