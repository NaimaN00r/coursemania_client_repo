import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
           
            <div className='blog'>
                <h1>Blogs</h1>
                <div>
                    <h4>1. what is cors?</h4>
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
                </div>
                <div>
                    <h4>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>
                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                    </p>
                </div>
                <div>
                    <h4>How does the private route work?</h4>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).

</p>
                </div>
                <div>
                    <h4>What is Node? How does Node work?</h4>
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.

</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;