import React from 'react';
import './Price.css';

const Price = (props) => {
	return (
		<div className='price-container'>
			<p className='price-key'>{props.title}:</p>
			<p className='price-value'>${props.price.toFixed(2)}</p>
		</div>
	);
};

export default Price;
