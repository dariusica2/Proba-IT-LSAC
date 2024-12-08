import React from 'react';
import { Link } from "react-router-dom";

import './styles/DefaultNavbar.css';

import logo from "../assets/images/sign_in_chef_IT_logo.svg";


const DefaultNavbar = () => {
	return (
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
	);
};

export default DefaultNavbar;