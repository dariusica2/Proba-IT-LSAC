import React from 'react';
import './styles/LoginForm.css';

const LoginForm = () => {
	return (
	<main className="login-main">
		<div className="login-box">
			<h2>Loghează-te, chiorăie mațele!</h2>
			<form className="login-form">

				<div className="input-group">
					<input type="email" placeholder="E-mail" required />
				</div>

				<div className="input-group">
					<input type="password" placeholder="Password" required />
				</div>

				<button type="submit" className="login-button">Log in</button>
			</form>
			<a href="/forgot-password" className="forgot-password">Forgot password</a>
		</div>
	</main>
	);
};

export default LoginForm;