import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../utilities/fakedb';
import '../Shop/Shop.css';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);

	const handleRemoveItem = (productKey) => {
		const newCart = cart.filter((cartItem) => cartItem.key !== productKey);
		setCart(newCart);
		deleteFromDb(productKey);
	};

	return (
		<div className='shop-container'>
			<div className='product-container'>
				{cart.map((cartItem) => (
					<ReviewItem
						key={cartItem.key}
						product={cartItem}
						handleRemoveItem={handleRemoveItem}
					/>
				))}
			</div>
			<div className='cart-container'>
				<Cart cart={cart} />
			</div>
		</div>
	);
};

export default OrderReview;
