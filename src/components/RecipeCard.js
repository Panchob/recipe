import React, { Component } from 'react'

export class RecipeCard extends Component {
    render() {
        const imageUrl = `https://spoonacular.com/recipeImages/${this.props.recipe.image}`;

        return (
            <div className="card">
                <div className="img-container">
                    <img src={imageUrl} alt={this.props.recipe.title}></img>
                </div>
                <div className="card-description">
                    <h3>{this.props.recipe.title}</h3>
                    <span>
                        <strong>SERVINGS: </strong> {this.props.recipe.servings}
                    </span>
                    <span>
                        <strong>TIME: </strong>{this.props.recipe.readyInMinutes}min
                    </span>
                    <button className="btn">VIEW RECIPE</button>
                </div>

            </div>
        )
    }

}