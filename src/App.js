import React, { Component } from 'react';
import { RecipeCard } from './components/RecipeCard'
import { Form } from './components/Form';

export default class App extends Component {


  state = {
    recipes: []

  }

  getRecipe = (e) => {
    e.preventDefault()

    const API_KEY = process.env.REACT_APP_API_KEY
    const query = e.target.elements.search.value

    if (query !== null) {
      const url = `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${API_KEY}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => this.setState({recipes: data.results}))
        .then(() => console.log(this.state.recipes))
    } else {
      alert("Please enter a recipe.")
    }

  }

  render() {
    return (

      <div>
        <header>
          <strong>RECIPE SEARCH</strong>
        </header>
        <main>
          <div className="search-container">
            <Form getRecipe={this.getRecipe}/>
          </div>
          <div className="cards-container">
          {this.state.recipes.map((recipe) => {
              return <RecipeCard key={recipe.id} recipe={recipe}/>
            })}

          </div>
        </main>
        <footer>
        </footer>

      </div>
    )
  }
}