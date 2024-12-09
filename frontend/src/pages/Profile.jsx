import React from "react";
import { useNavigate } from "react-router-dom";

import ProfileCard from "../components/ProfileCard";
import UserDetailForm from "../components/UserDetailsForm";

import "../components/styles/Login.css";

const Profile = () => {
	const navigate = useNavigate()

    const addRecipeClick = () => {
        navigate("/add-recipe")
    };

	return (
		<div className="app-container">
			<div className="content-container">
				<ProfileCard />
				<UserDetailForm />
			</div>
			<button className="add-recipe-btn" onClick={addRecipeClick}>Add a recipe</button>
		</div>
 	);
};

export default Profile;