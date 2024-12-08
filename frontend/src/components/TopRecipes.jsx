import React from 'react';

import './styles/TopRecipes.css';

import recipe1 from '../assets/images/recipe1.png';
import recipe2 from '../assets/images/recipe2.png';
import recipe3 from '../assets/images/recipe3.png';

const recipes = [
	{ id: 1, title: 'Supă la plic', author: 'Mari', image: recipe1 },
	{ id: 2, title: 'Pâine cu pateu', author: 'Croi', image: recipe2 },
	{ id: 3, title: 'Cartofi prăjiți', author: 'Edi', image: recipe3 },
];

const TopRecipes = () => {
	return (
	<section className="top-recipes">
		<h2>Top Rated Recipes</h2>
		<div className="recipe-grid">
		{recipes.map(recipe => (
			<div className="recipe-card" key={recipe.id}>
			<img src={recipe.image} alt={recipe.title} />
			<h3>{recipe.title}</h3>
			<p>Author: {recipe.author}</p>
			</div>
		))}
		</div>
	</section>
	);
};

export default TopRecipes;