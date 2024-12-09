import React from 'react';
import { useContext } from "react";
import { UserContext } from "../../context/userContext"

import './styles/UserDetailsForm.css';

const UserDetailsForm = () => {
	const {user} = useContext(UserContext)

	return (
		<div className="user-details">
			<div>
				<label>E-mail:</label>
				{!!user && (<h2>{user.email}</h2>)}
			</div>
			<div>
				<label>Telephone:</label>
				{!!user && (<h2>{user.telephone}</h2>)}
			</div>
			<div>
				<label>College group:</label>
				<p>Gogu college educated</p>
			</div>
		</div>
	);
};

export default UserDetailsForm;