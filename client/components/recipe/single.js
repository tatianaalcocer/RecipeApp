// var React = require("react");
import React from "react";
// var foodComponent = require("./foodComponent");

export default class Recipe extends React.Component {
	constructor(){
        super();

    }
	render(){
		return(
				<div className="recipe">
					<a className="recipeLnk" href={this.props.recipeLink}>
					<h6>{this.props.recipeName}</h6>
					<img className="recipeImg" src={this.props.recipeImage}/>
					</a>
				</div>
		)
	}
}