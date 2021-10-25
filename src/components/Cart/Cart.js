import React from 'react';
import Price from '../Price/Price';
import './Cart.css';

const Cart = (props) => {
	const { cart } = props ? props : {};

	const itemQuantity = cart.reduce(
		(prev, current) => prev + current.quantity,
		0
	);
	const itemPrice = cart.reduce(
		(prev, current) => prev + current.price * current.quantity,
		0
	);
	const shippingPrice = cart.reduce(
		(prev, current) => prev + current.shipping,
		0
	);
	const taxPrice = itemPrice * 0.1;

	return (
		<div className='cart'>
			<h1>Order Summary</h1>
			<p>Items ordered: {itemQuantity}</p>
			<Price title='Items' price={itemPrice} />
			<Price title='Shipping & Handling' price={shippingPrice} />
			<Price title='Total before tax' price={itemPrice + shippingPrice} />
			<Price title='Estimated tax' price={taxPrice} />
			<div className='grand-total'>
				<Price
					title='Order Total'
					price={itemPrice + shippingPrice + taxPrice}
				/>
			</div>
			{cart.length ? props.children : ''}
		</div>
	);
};

export default Cart;
