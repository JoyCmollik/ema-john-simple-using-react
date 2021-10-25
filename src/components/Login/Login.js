import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { signInUsingGoogle, isLoading, setIsLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const redirect_uri = location.state?.from || '/';

	const handleGoogleLogin = () => {
		setIsLoading(true);
		signInUsingGoogle()
			.then((result) => {
				history.push(redirect_uri);
			})
			.catch((error) => {
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	const handleLogin = () => {};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div style={{ textAlign: 'center' }}>
				<h1>Login</h1>
				<form onSubmit={handleLogin}>
					<input type='email' placeholder='your email here' />
					<br />
					<input type='password' placeholder='your password' />
					<br />
					<input type='submit' value='submit' />
				</form>
				<p>
					new to ema-john?{' '}
					<Link to='/register'>create a new account</Link>
				</p>
				<div>-------------- or --------------</div>
				<button
					disabled={isLoading}
					onClick={handleGoogleLogin}
					className='cart-btn'
				>
					google sign in
				</button>
			</div>
		</div>
	);
};

export default Login;
