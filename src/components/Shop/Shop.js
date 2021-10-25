import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products] = useProducts([]);
	const [prevCart] = useCart();
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);
	const history = useHistory();

	// pagination
	const [pageCount, setPageCount] = useState(0);
	const [pageNumber, setPageNumber] = useState(0);
	let size = 10;

	useEffect(() => {
		fetch(`http://localhost:5000/products?page=${pageNumber}&&size=${size}`)
			.then((response) => response.json())
			.then((data) => {
				setDisplayProducts(data.products);

				// pagination codes
				const count = data.count;
				const pageNumber = Math.ceil(count / size);
				setPageCount(pageNumber);
			});
	}, [pageNumber]);

	useEffect(() => {
		setCart(prevCart);
	}, [prevCart]);

	// add to cart handler
	const handleAddToCart = (product) => {
		const itemExist = cart.find((pd) => pd.key === product.key);
		let newCart;

		if (itemExist) {
			itemExist.quantity += 1;
			newCart = [...cart];
		} else {
			product.quantity = 1;
			newCart = [...cart, product];
		}

		setCart(newCart);
		addToDb(product.key);
		alert('your item added successfully!');
	};

	const handleSearch = (e) => {
		const searchInput = e.target.value;
		const filteredProducts = products.filter((product) =>
			product.name.toLowerCase().includes(searchInput.toLowerCase())
		);
		setDisplayProducts(filteredProducts);
	};

	const handleReviewOrders = () => {
		history.push('/orders');
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
					{displayProducts &&
						displayProducts.map((product) => (
							<Product
								key={product.key}
								product={product}
								handleAddToCart={handleAddToCart}
							/>
						))}

					{/* pagination */}
					<div className='pagination'>
						{[...Array(pageCount).keys()].map((number) => (
							<button
								className={
									pageNumber === number ? 'selected' : ''
								}
								key={number}
								onClick={() => setPageNumber(number)}
							>
								{number + 1}
							</button>
						))}
					</div>
				</div>
				<div className='cart-container'>
					<Cart cart={cart}>
						<button
							onClick={handleReviewOrders}
							className='cart-btn'
						>
							review orders
						</button>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;
