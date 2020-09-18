import React, { Component } from "react"

export class Form extends Component {
    

    render() {
        return (
        <form onSubmit={this.props.getRecipe}>
            <input id="search-input" type="text" name="search"></input>
            <button className="btn">SEARCH</button>
        </form>
        )
    }
}