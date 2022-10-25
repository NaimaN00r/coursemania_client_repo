import React from 'react';
import { useLoaderData } from 'react-router';

const CheckOut = () => {
    const Access = useLoaderData();
    const {category_id,title}=Access;
    return (
        <div>
            <h2>Course id is:{category_id}</h2>
            <h2>Course Title is:{title}</h2>
        </div>
    );
};

export default CheckOut;