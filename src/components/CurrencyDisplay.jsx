import React from 'react';
import CurrencyFormat from 'react-currency-format';

export const CurrencyDisplay = (props) => (
    <CurrencyFormat value={props.value} displayType={'text'} thousandSeparator={true} prefix={props.prefix} />
);

export const MarketValueDisplay = (props) => (
    <div className='market-value'>
        <label>{props.label}</label>
        <CurrencyDisplay prefix={props.prefix} value={props.value}/>
    </div>
)