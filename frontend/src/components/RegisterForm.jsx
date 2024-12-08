import React from 'react';
import { useState } from 'react';
import './styles/RegisterForm.css';

const RegisterForm = () => {
	return (
	<main className="register-main">
		<div className="register-box">
			<h2>Hai, fă foamea cu noi!</h2>
			<form className="register-form">

				<div className="input-group">
					<input type="name" placeholder="Full name" required />
				</div>

				<div className="input-group">
					<input type="telephone" placeholder="Telephone" required />
				</div>

                <div className="input-group">
					<input type="email" placeholder="E-mail" required />
				</div>

                <div className="input-group">
					<input type="password" placeholder="Password" required />
				</div>

                <div className="input-group">
					<input type="password" placeholder="Confirm Password" required />
				</div>

				<button type="submit" className="register-button">Sign up</button>

			</form>
		</div>
	</main>
	);
};

export default RegisterForm;