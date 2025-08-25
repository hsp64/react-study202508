import React from 'react';
import './Card.css';

const Card = ( { children, className='' }) => {

    // console.log(`props: `, props);
    return (
        <div className={`card ${className}`}>
            { children }
        </div>
    );
};

export default Card;