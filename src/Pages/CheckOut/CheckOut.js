import React from 'react';
import { useLoaderData } from 'react-router';

const CheckOut = () => {
    const Access = useLoaderData();
    const {category_id,title}=Access;
    return (
        <div className='border border-secondary bg-info mt-5 pt-5 pb-5 text-danger'>
            <h2>Course id is:{category_id}</h2>
            <h2>Course Title is:{title}</h2>
        </div>
    );
};

export default CheckOut;