import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	return (
		<header>
			<img src={logo} alt='logo of a company' />
			<nav>
				<NavLink to='/'>Shop</NavLink>
				<NavLink to='/orders'>Order Review</NavLink>
				<NavLink to='/inventory'>Manage Inventory here</NavLink>
			</nav>
		</header>
	);
};

export default Header;
