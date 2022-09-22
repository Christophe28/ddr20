import React from 'react';

const ViewWrapper = ({ children }) => {
    return (
        <div>
            <h1>ViewWrapper</h1>
            {children}
        </div>
    );
};

export default ViewWrapper;