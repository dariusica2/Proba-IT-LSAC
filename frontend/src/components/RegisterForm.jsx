import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import './styles/RegisterForm.css';

const RegisterForm = () => {
	const navigate = useNavigate()

	const [data, setData] = useState({
		name: '',
		telephone: '',
		email: '',
		password: '',
	})

	const registerUser = async (e) => {
		e.preventDefault()
		const {name, telephone, email, password} = data;
		try {
			const {data} = await axios.post('/register', {
				name, telephone, email, password
			})

			if (data.error) {
				toast.error(data.error)
			} else {
				setData({})
				toast.success('Înregistrare reușită. Bun venit!')
				navigate('/login')
			}
		} catch (error) {
			console.log(error)
		}
	}

	return (
	<main className="register-main">
		<div className="register-box">
			<h2>Hai, fă foamea cu noi!</h2>
			<form className="register-form" onSubmit={registerUser}>

				<div className="input-group">
					<input type="text" placeholder="Full name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} />
				</div>

				<div className="input-group">
					<input type="text" placeholder="Telephone" value={data.telephone} onChange={(e) => setData({...data, telephone: e.target.value})} />
				</div>

                <div className="input-group">
					<input type="email" placeholder="E-mail" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} />
				</div>

                <div className="input-group">
					<input type="password" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} />
				</div>

                {/* <div className="input-group">
					<input type="password" placeholder="Confirm Password" required />
				</div> */}

				<button type="submit" className="register-button">Sign up</button>

			</form>
		</div>
	</main>
	);
};

export default RegisterForm;