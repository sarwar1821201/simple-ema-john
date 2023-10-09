import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const {error,status}= useRouteError()
    return (
        <div>
            <h1>NO Data Found !!!!  Please Try Again.</h1>
            <h2>Error Comes From : {error.message}  </h2>
        </div>
    );
};

export default Error;