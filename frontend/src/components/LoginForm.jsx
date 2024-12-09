import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

import './styles/LoginForm.css';

const LoginForm = () => {
	const navigate = useNavigate()

	const [data, setData] = useState({
		email: '',
		password: '',
	})

	const loginUser = async (e) => {
		e.preventDefault()
		const {email, password} = data

		try {
			const {data} = await axios.post('/login', {
				email,
				password
			});

			if (data.error) {
				toast.error(data.error)
			} else {
				setData({});
				navigate('/profile')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
	<main className="login-main">
		<div className="login-box">
			<h2>Loghează-te, chiorăie mațele!</h2>
			<form className="login-form" onSubmit={loginUser}>

				<div className="input-group">
					<input type="email" placeholder="E-mail" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
				</div>

				<div className="input-group">
					<input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
				</div>

				<button type="submit" className="login-button">Log in</button>
			</form>
			<a href="/forgot-password" className="forgot-password">Forgot password</a>
		</div>
	</main>
	);
};

export default LoginForm;