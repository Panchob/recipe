import React, { Component } from 'react';

const API_KEY = process.env.REACT_APP_API_KEY

export class RecipeDetails extends Component {

    constructor(props) {
        super();
        this.state = {
            //id:props.location.state.id,
            ingredients: {},
            instructions: {}
        }
    }


    getRecipeIngredients = () => {
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/ingredientWidget.json?apiKey=${API_KEY}`;
    
        fetch(url)
          .then((response) => response.json()
          .then((data => this.setState({
              ingredients: data}))))
      }

    getRecipeInstructions = () => {
        const url = `https://api.spoonacular.com/recipes/${this.state.id}/analyzedInstructions?apiKey=${API_KEY}`;

        fetch(url)
        .then((response) => response.json()
        .then((data => this.setState({
            instructions: data}))))
    }

    componentDidMount() {
        //this.getRecipeInstructions();
        //this.getRecipeIngredients();
    }

    render() {

        return (
        <div>
          <header>
            <strong>RECIPE SEARCH</strong>
          </header>
          <main className="recipe-details-container">
              <section className="recipe-details">
                  
                    <div className="separator"></div>
                    <h1>INGREDIENTS</h1>
                    <ul>
                        <li className="ingredient">2 cups of all purpose flour</li>
                        <li className="ingredient">2 cups of all purpose flour</li>
                        <li className="ingredient">2 cups of all purpose flour</li>
                        <li className="ingredient">2 cups of all purpose flour</li>
                    </ul>
                    <div className="separator"></div>
                    <h1>INSTRUCTIONS</h1>
                    <ol>
                        <li className="instruction">Adjust the oven rack to the lower third position and preheat the oven to 350°F (177°C). Grease a 9×5-inch loaf pan or coat with nonstick spray. Set aside.</li>
                        <li className="instruction">Adjust the oven rack to the lower third position and preheat the oven to 350°F (177°C). Grease a 9×5-inch loaf pan or coat with nonstick spray. Set aside.</li>
                        <li className="instruction">Adjust the oven rack to the lower third position and preheat the oven to 350°F (177°C). Grease a 9×5-inch loaf pan or coat with nonstick spray. Set aside.</li>
                        <li className="instruction">Adjust the oven rack to the lower third position and preheat the oven to 350°F (177°C). Grease a 9×5-inch loaf pan or coat with nonstick spray. Set aside.</li>
                    </ol>

              </section>
          </main>
        </div>

        )
    }

}