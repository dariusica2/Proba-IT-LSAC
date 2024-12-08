import React from "react";

import "../components/styles/Login.css";

import DefaultNavbar from "../components/DefaultNavbar";
import LoginForm from "../components/LoginForm";

const Login = () => {
	return (
		<div className="login-container">
			<DefaultNavbar />
			<LoginForm />
		</div>
	);
};

export default Login;