import React, { useEffect, useState } from 'react';
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
            <h2 class="ms-2 ps-3 mt-3 mb-3">Available Courses</h2>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <div class="pt-3 pb-3 ps-0  bg-info bg-opacity-10 border border-info border-width-2 text-center  rounded " style={{width:300}}><Link class='text-decoration-none fw-bold' to={`/category/${category.id}`}>{category.name}</Link></div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideCourses;