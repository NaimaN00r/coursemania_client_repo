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
            <h2>Total courses are:{categories.length}</h2>
            <div text-none>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideCourses;