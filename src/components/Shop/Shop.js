import React, { useEffect, useState } from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products] = useProducts([]);
	const [prevCart] = useCart(products);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	useEffect(() => {
		setDisplayProducts(products);
	}, [products]);

	useEffect(() => {
		setCart(prevCart);
	}, [prevCart]);

	// add to cart handler
	const handleAddToCart = (product) => {
		const itemExist = cart.find((pd) => pd.key === product.key);
		let newCart = [];

		if (itemExist) {
			product.quantity += 1;
			newCart = [...cart];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}

		setCart(newCart);
		addToDb(product.key);
	};

	const handleSearch = (e) => {
		const searchInput = e.target.value;
		const filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchInput.toLowerCase())
		);
		setDisplayProducts(filteredProducts);
	};

	return (
		<div className='shop'>
			<div className='search-field'>
				<input
					type='text'
					onChange={handleSearch}
					placeholder='search your desired product here'
				/>
			</div>
			<div className='shop-container'>
				<div className='product-container'>
					{displayProducts.map((product) => (
						<Product
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						/>
					))}
				</div>
				<div className='cart-container'>
					<Cart cart={cart} />
				</div>
			</div>
		</div>
	);
};

export default Shop;
