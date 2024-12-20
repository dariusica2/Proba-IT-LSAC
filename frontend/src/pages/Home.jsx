import React from "react";

import "../components/styles/Login.css";

import homelogo from "../assets/images/home_chef_IT_logo.svg";
import TopRecipes from "../components/TopRecipes";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div>
	  		<main className="home-main">
				<div className="home-logo">
					<img src={homelogo} alt="Home Logo" />
				</div>
	  		</main>
			<TopRecipes />
			<ContactForm />
			<Footer />
		</div>
 	);
};

export default Home;