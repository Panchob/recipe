import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class RecipeCard extends Component {
    render() {
        const imageUrl = `https://spoonacular.com/recipeImages/${this.props.recipe.image}`;
        const recipe = this.props.recipe

        return (
            <div className="card">
                <div className="img-container">
                    <img src={imageUrl} alt={recipe.title}></img>
                </div>
                <div className="card-description">
                    <h3>{recipe.title}</h3>
                    <span>
                        <strong>SERVINGS: </strong> {recipe.servings}
                    </span>
                    <span>
                        <strong>TIME: </strong>{recipe.readyInMinutes}min
                    </span>
                    <button className="btn">
                        <Link to={{ 
                            pathname: `/recipe/${recipe.id}`,
                            state: {id: recipe.id}
                        }}>VIEW RECIPE</Link>
                    </button>
                </div>

            </div>
        )
    }

}