'use client';

import React from 'react';

const ErrorPage: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    );
};

export default ErrorPage;