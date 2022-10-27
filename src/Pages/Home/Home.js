import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cardd from '../Shared/Card/Cardd';

const Home = () => {
    const courses = useLoaderData();
    return (
        <div  class="row row-cols-lg-3 row-cols-md-1 mt-4 pt-1 ">
            {
                courses.map(course => <Cardd
                    key={course._id}
                    course={course}
                ></Cardd>)
            }
        </div>
        
    );
};

export default Home;