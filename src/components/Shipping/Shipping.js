import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
	const { user } = useAuth();
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div
			style={{
				textAlign: 'center',
			}}
		>
			<h4>Shipping</h4>
			<div
				style={{
					width: '100%',
				}}
			>
				<form
					style={{
						maxWidth: '400px',
						margin: '0 auto',
						display: 'flex',
						flexDirection: 'column',
					}}
					onSubmit={handleSubmit(onSubmit)}
				>
					<input
						className='input-style'
						type='email'
						{...register('email', { required: true })}
						placeholder='email'
						defaultValue={user?.email}
					/>
					<input
						className='input-style'
						type='text'
						{...register('name', { required: true })}
						placeholder='name'
						defaultValue={user?.displayName}
					/>
					<input
						className='input-style'
						type='text'
						{...register('address', { required: true })}
						placeholder='address'
					/>
					<input
						className='input-style'
						type='text'
						{...register('city', { required: true })}
						placeholder='city'
					/>
					<input
						className='input-style'
						type='number'
						{...register('zipcode', { required: true })}
						placeholder='zipcode'
					/>
					<input className='input-style' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default Shipping;
