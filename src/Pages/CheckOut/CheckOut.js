import React from 'react';
import { useLoaderData } from 'react-router';

const CheckOut = () => {
    const Access = useLoaderData();
    const {category_id,title}=Access;
    return (
        <div className='border border-secondary border-info bg-info bg-opacity-15 mt-5 pt-5 pb-5 text-danger ms-5 me-5 text-center'>
            <h2>Course id is:{category_id}</h2>
            <h2>Course Title is:{title}</h2>
        </div>
    );
};

export default CheckOut;