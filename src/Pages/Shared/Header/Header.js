import React, { useContext, useEffect, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authprovider/AuthProvider';
import LeftSideCourses from '../LeftSideCourses/LeftSideCourses';
import {  faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css'


const Header = () => {
  const [theme, setTheme] = useState('light');
  const changeMode = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    function displayUserName(e){
       document.getElementById('name').innerText=user?.displayName
    }
    function displayNothing(){
        document.getElementById('name').innerText=""
    }

    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <img style={{width:50,height:50}} src='https://i.pinimg.com/originals/c2/72/3a/c2723a0519d5ea309c746d40635e09c5.png' alt=''></img>
        <Navbar.Brand href="#home">Course Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Button onClick={changeMode} variant='light'><FontAwesomeIcon  className='flex-none mr-4' icon={faLightbulb}></FontAwesomeIcon></Button>
          </Nav>
          <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                       <p id='name'></p>
                                        <Button variant="light" class="text-dark me-2" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                    
                                        <Link class="text-dark me-2" to='/login'>Login</Link>
                                        <Link class="text-dark me-2" to='/register'>Register</Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL} 
                                    onMouseOver={displayUserName}
                                    onMouseOut={displayNothing}
                                    >
                                   
                                </Image>
                                : <FaUser class="icon"></FaUser>
                            }
                        </Link>
                        
                    </Nav>
          <div className='d-lg-none'>
            <LeftSideCourses></LeftSideCourses>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    );
};

export default Header;