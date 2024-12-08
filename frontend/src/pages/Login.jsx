import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/Login.css";

import logo from "../assets/images/sign_in_chef_IT_logo.svg";

const Login = () => {
	return (
		<div className="login-container">

			<header className="login-header">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="Logo" />
					</Link>
				</div>

				<nav className="navbar">
					<div className="nav-left">
						<a href="/recipes">Recipes</a>
						<a href="/add-recipe">Add Recipe</a>
					</div>

					<div className="nav-right">
						<div className="login-button-border">
							<a href="/login">Login</a>
						</div>
						<a href="/register">Register</a>
					</div>
				</nav>
			</header>

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

		</div>
	);
};

export default Login;