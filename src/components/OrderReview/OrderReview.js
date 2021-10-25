import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteFromDb } from '../../utilities/fakedb';
import '../Shop/Shop.css';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart();
	const history = useHistory();

	const handleRemoveItem = (productKey) => {
		const newCart = cart.filter((cartItem) => cartItem.key !== productKey);
		setCart(newCart);
		deleteFromDb(productKey);
	};

	const handlePlaceOrder = () => {
		// clearTheCart();
		// setCart([]);
		history.push('/shipping');
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
				<Cart cart={cart}>
					<button onClick={handlePlaceOrder} className='cart-btn'>
						Proceed to shipping
					</button>
				</Cart>
			</div>
		</div>
	);
};

export default OrderReview;
