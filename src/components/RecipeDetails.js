import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

export class RecipeDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            id:props.id,
            ingredients: {},
            instructions: {}
        }
    }


    getRecipeIngredient = () => {
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/ingredientWidget&apiKey=${API_KEY}`;
    
        fetch(url)
          .then((response) => response.json()
          .then((data => this.setState({
              ingredients: data}))))
      }

    getRecipeInstructions = () => {
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions&apiKey=${API_KEY}`;

        fetch(url)
        .then((response) => response.json()
        .then((data => this.setState({
            instructions: data}))))
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }

}