import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import "./App.css";
import Loading from "./components/Loading";

function App() {
	const [recipes, setRecipes] = useState([]);
	const [query, setQuery] = useState("");
	const [healthLabel, setHealthLabel] = useState("vegetarian");
	const [isLoading, setIsLoading] = useState(false);

	const YOUR_APP_ID = "0f4ce4f6";
	const YOUR_APP_KEY = "b24d17009f68464b4101694f129c61bd";
	const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

	const getRecipeInfo = async () => {
		setIsLoading(true);
		let result = await axios.get(url);
		setRecipes(result.data.hits);
		console.log(result.data.hits);
		setIsLoading(false);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		getRecipeInfo();
	};

	return (
		<>
			<Navbar message="#100DaysOfCode - Recipe Finder" />
			<div className="container">
				<form className="form-inline mt-4" onSubmit={onSubmit}>
					<div className="container d-flex justify-content-center row">
						<div className="col">
							<input
								type="text"
								placeholder="Type the Ingredient"
								autoComplete="Off"
								className="form-control"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
						<div className="col form-group">
							<select
								className="form-select"
								onChange={(e) => setHealthLabel(e.target.value)}
							>
								<option value="vegan">vegan</option>
								<option value="low-sugar">low-sugar</option>
								<option value="kosher">kosher</option>
								<option value="paleo">paleo</option>
								<option value="pecatarian">pecatarian</option>
								<option value="pork-free">pork-free</option>
								<option value="soy-free">soy-free</option>
								<option value="tree-nut-free">tree-nut-free</option>
								<option value="wheat-free">wheat-free</option>
								<option value="vegetarian">vegetarian</option>
								<option value="tree-nut-free">tree-nut-free</option>
							</select>
						</div>
						<div className="col">
							<input
								type="submit"
								value="Get you food"
								className="btn btn-dark"
							/>
						</div>
					</div>
				</form>
				{isLoading ? (
					<Loading />
				) : (
					<div className="row mt-2 card-container">
						{recipes.map((recipe) => (
							<Recipe recipe={recipe} />
						))}
					</div>
				)}
			</div>
		</>
	);
}

export default App;
