import React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/userContext"

import './styles/ProfileCard.css';
import chefImage from '../assets/images/profile_card_chef.svg';

const ProfileCard = () => {
	const {user} = useContext(UserContext)

	return (
		<div className="profile-card">
			<img src={chefImage} alt="Chef" className="profile-img" />
			{!!user && (<h2>Salut, bucătarule {user.name}!</h2>)}
		</div>
	);
};
	
export default ProfileCard;