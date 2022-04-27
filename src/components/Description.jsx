import React from 'react';

export const DescriptionUnSafe = (props) => (
    <div className='description'>
    <h2>Description</h2>
    <p dangerouslySetInnerHTML={{__html: props.content}}/>
    </div>
);

export const Description = (props) => (
    <div className='description'>
    <h2>{props.heading}</h2>
    {props.children}
    </div>
);