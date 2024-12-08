import React from 'react';
import './styles/AddRecipeForm.css';

const AddRecipeForm = () => {
	return (
	<main className="add-recipe-main">
		<div className="add-recipe-box">
			<form className="add-recipe-form">

				<div className="input-group">
					<input type="name" placeholder="Recipe name:" required />
				</div>

				<div className="input-group">
					<input type="description" placeholder="Description:" required />
				</div>

				<button type="submit" className="add-recipe-button">Add recipe</button>
			</form>
		</div>
	</main>
	);
};

export default AddRecipeForm;