import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
	const { signInUsingGoogle } = useAuth();

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<h1>Register: Create Account</h1>
				<form onSubmit=''>
					<input type='email' placeholder='your email' />
					<br />
					<input type='password' placeholder='your password' />
					<br />
					<input type='password' placeholder='confirm password' />
					<br />
					<input type='submit' value='submit' />
				</form>
				<p>
					already have an account? <Link to='/login'>login</Link>
				</p>
				<div>------------------- or ----------------</div>
				<button onClick={signInUsingGoogle} className='cart-btn'>
					google sign in
				</button>
			</div>
		</div>
	);
};

export default Register;
