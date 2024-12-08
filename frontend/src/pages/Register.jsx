import React from "react";

import "../components/styles/Login.css";

import DefaultNavbar from "../components/DefaultNavbar";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
	return (
		<div className="login-container">
			<DefaultNavbar />
			<RegisterForm />
		</div>
	);
};

export default Register;