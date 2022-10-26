import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h2>Accept the terms and conditions</h2>
            <p>If you accept the terms and condition go back to the <Link to='/register'>Registation</Link>page</p>
        </div>
    );
};

export default TermsAndCondition;