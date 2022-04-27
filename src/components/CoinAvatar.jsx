import React from 'react';

export const CoinAvatar = (props) =>(
    <div className={props.classNameAttr}>
        <img src={props.imageURL} alt="Coin" width={props.width} height={props.height}/>
        <span>{props.name}</span>
    </div>
);