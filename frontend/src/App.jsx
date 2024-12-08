import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/recipes" element={<Recipes />} />
					<Route path="/add-recipe" element={<AddRecipe />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;