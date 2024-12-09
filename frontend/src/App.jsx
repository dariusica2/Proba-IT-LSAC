import React from "react";
import axios from 'axios'

import { Toaster } from 'react-hot-toast'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserContextProvider } from '../context/userContext';
import { useContext } from "react";
import { UserContext } from "../context/userContext"

import DefaultNavbar from "./components/DefaultNavbar";
import LoginNavbar from "./components/LoginNavbar";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

const App = () => {
	return (
		<UserContextProvider >
		<Router>
			<div className="App">
					{useContext(UserContext) ? <LoginNavbar /> : <DefaultNavbar />}
					<Toaster position='bottom-right' toastOptions={{duration: 3000}} />
					<Routes>
						<Route index element={<Home />} />
						<Route path="/home" element={<Home />} />
						<Route path="/recipes" element={<Recipes />} />
						<Route path="/add-recipe" element={<AddRecipe />} />
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
					</Routes>
			</div>
		</Router>
		</UserContextProvider>
	);
};

export default App;