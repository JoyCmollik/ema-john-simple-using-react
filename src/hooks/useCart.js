import { useEffect, useState } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const savedCart = getStoredCart();

		// the primary target here is to load only those data from the server which are in the cart so that if there are millions of products we don't fetch all of them first, and then maybe filter, optimum solution would be to send all the keys that are stored and then get those specific products only.

		const keys = Object.keys(savedCart);

		fetch('http://localhost:5000/products/byKeys', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(keys),
		})
			.then((response) => response.json())
			.then((products) => {
				console.log(products);
				if (products.length) {
					const newCart = [];
					for (const key in savedCart) {
						const addedProduct = products.find(
							(product) => product.key === key
						);

						// set quantity
						const quantity = parseInt(savedCart[key]);
						addedProduct.quantity = quantity;
						console.log('key', key);
						console.log('quantity', addedProduct.quantity);
						newCart.push(addedProduct);
					}
					setCart(newCart);
				}
			});
	}, []);

	return [cart, setCart];
};

export default useCart;
