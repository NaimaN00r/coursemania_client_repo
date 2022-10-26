import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/authprovider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useLocation, useNavigate } from 'react-router';
import { ButtonGroup, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()
     const gitprovider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handlGitSignIn=()=>{
        providerLogin(gitprovider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
}
    

    const [error, setError] = useState('');
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if(user.emailVerified){
                    navigate(from, {replace: true});
                    window.location='/courses'
                }
                else{
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="Password" required />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
      <p>Or log in using</p>
      <div className='d-flex '>
      
                <Button onClick={handleGoogleSignIn}  className='m-2 p-3' variant="outline-dark"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button onClick={handlGitSignIn} className='p-3 m-2' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
      </div>
      <p>Not a member yet?<Link to='/register'>Register</Link></p>
      
    </Form>
        </Container>

    );
};

export default Login;