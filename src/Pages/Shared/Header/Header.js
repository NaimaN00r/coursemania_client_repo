import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/authprovider/AuthProvider';
import LeftSideCourses from '../LeftSideCourses/LeftSideCourses';

const Header = () => {
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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Course Mania</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">light</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
                        <>
                            {
                                user?.uid ?
                                    <>
                                       <p id='name'></p>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                    
                                        <Link to='/login'>Login</Link>
                                        <Link to='/register'>Register</Link>
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
                                : <FaUser></FaUser>
                            }
                        </Link>
                    </Nav>
          <div className='d-lg-none'>
            <LeftSideCourses></LeftSideCourses>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;