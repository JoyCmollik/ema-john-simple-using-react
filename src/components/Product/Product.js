import React from 'react';
import Rating from 'react-rating';
import './Product.css';

const Product = (props) => {
	const { img, name, seller, price, stock, star, starCount, features } =
		props.product;

	return (
		<div className='product'>
			<div className='product-img'>
				<img src={img} alt='product imag' />
			</div>
			<div>
				<h4 className='product-title'>{name}</h4>
				<p>
					<small>by {seller}</small>
				</p>
				<div className='product-info-wrapper'>
					<div className='product-info-left'>
						<p>${price.toFixed(2)}</p>
						<p>
							<small>
								only {stock} left in stock - order soon
							</small>
						</p>
						{/* add to cart button */}
						<button
							className='cart-btn'
							onClick={() =>
								props?.handleAddToCart(props.product)
							}
						>
							add to cart
						</button>
					</div>
					<div className='product-info-right'>
						<Rating
							emptySymbol='far fa-star'
							fullSymbol='fas fa-star'
							initialRating={star}
						/>
						<h4>Features</h4>
						<ul className='features-list'>
							{features.length ? (
								features.map((feature, index) => (
									<li key={index}>
										<small>
											{feature.description}:{' '}
											{feature.value}
										</small>
									</li>
								))
							) : (
								<li>
									<small>NA</small>
								</li>
							)}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
