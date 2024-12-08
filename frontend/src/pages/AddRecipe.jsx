import React from "react";

import "../components/styles/Login.css";

import DefaultNavbar from "../components/DefaultNavbar";
import AddRecipeForm from "../components/AddRecipeForm";

const AddRecipe = () => {
	return (
		<div className="login-container">
			<DefaultNavbar />
			<AddRecipeForm />
		</div>
	);
};

export default AddRecipe;