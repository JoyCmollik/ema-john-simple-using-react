import React from 'react';
import Rating from 'react-rating';
import '../Product/Product.css';

const ReviewItem = (props) => {
	const { quantity, name, seller, price, stock, star, starCount, features } =
		props.product;
	return (
		<div className='product'>
			<div>
				<h4 className='product-title'>{name}</h4>
				<p>
					<small>by {seller}</small>
				</p>
				<div className='product-info-wrapper'>
					<div className='product-info-left'>
						<p>${price.toFixed(2)}</p>
						<p>Quantity: {quantity}</p>
						{/* add to cart button */}
						<button
							className='cart-btn'
							onClick={() =>
								props.handleRemoveItem(props.product.key)
							}
						>
							Remove
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReviewItem;
