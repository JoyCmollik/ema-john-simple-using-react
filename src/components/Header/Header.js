import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<header>
			<img src={logo} alt='logo of a company' />
			<nav>
				<NavLink to='/'>Shop</NavLink>
				<NavLink to='/orders'>Order Review</NavLink>
				<NavLink to='/inventory'>Manage Inventory here</NavLink>
				{!user?.email ? (
					<NavLink to='/login'>login</NavLink>
				) : (
					<div style={{ display: 'inline-block' }}>
						<span style={{ color: 'white' }}>
							{user?.displayName}
						</span>
						<button onClick={logOut}>logout</button>
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
