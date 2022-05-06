import React from "react";

const Recipe = ({ recipe }) => {
	return (
		<div className="col">
			<div className="card card-style mt-4">
				<img src={recipe.recipe.image} alt="" />
				<div className="card-body">
					<p className="card-title">Name: {recipe.recipe.label}</p>
					<p className="card-text">
						Type: <span>{recipe.recipe.mealType}</span>
					</p>
					<a
						href={recipe.recipe.url}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-primary"
					>
						Read the Recipe
					</a>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
