import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideCourses = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:4500/course-categories')
        .then( res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div>
            <h2>Available Courses</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link class='text-decoration-none fw-bold' to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideCourses;