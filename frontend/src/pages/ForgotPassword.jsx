import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/Login.css";

import logo from "../assets/images/sign_in_chef_IT_logo.svg";
import homelogo from "../assets/images/home_chef_IT_logo.svg";


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

	  		<main className="home-main">
				<div className="home-logo">
					<img src={homelogo} alt="Home Logo" />
				</div>
	  		</main>

		</div>
 	);
};

export default Login;