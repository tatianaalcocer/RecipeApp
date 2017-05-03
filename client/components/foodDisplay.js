import React from 'react';
import FoodComponent from './foodComponent.js';
import axios from 'axios';

export default class FoodDisplay extends React.Component {
  constructor() {
    super();
    this.state = {
      foods: [{
        name: 'testFood',
        shelf_life: '1',
      },],
    };
  }
  
  addFood(newFood) {
    this.setState({ foods: this.state.foods.concat(newFood), });
  }
  
  createFood(food) {
    console.log('food argument', food);
    axios.post('/userfoods', {data:{
      food_name: food.food_name,
      shelf_life: food.shelf_life,
    }}).then((nextFood) => {
      console.log('nextfood', nextFood);

      this.getFoods();
    })
    .catch(console.error);
  }
  
  getFoods() {
    // change this to route "/all"
  //  var root = 'https://jsonplaceholder.typicode.com';
    // this can later delete
    // const todoToFood =todo=>({name: todo.title, 'shelf_life':todo.id});
     // uses axios to get the route for the get request
    //  axios.get(`${root}/todos`)
    // won't need bottom line
    // .then(todos=>todos.map(todoToFood))
    axios.get('/all')
      .then((res) => { console.log("axios res",res); return res.data; })
      .then(foods => this.setState({ foods, }));
  }
  
  componentWillMount() {
    this.getFoods();
    console.log(this.state.foods);
  }
  
  handleRedirect(target) {
    window.location = target;
  }
  
  handleChoiceRedirect() {
    this.handleRedirect('#/choice');
  }
  
  handleClick() {
    this.createFood({ food_name: 'testFood', shelf_life: 1, });

   // this.props.history.push('/some/path');
    console.log('hello');

   // Submit Route
  }
  
  render() {
    return (
      <div id="side">
        <div className="row" id="sideTitle">
          <h6>What's In Your Fridge</h6>
          <hr/>
          <p>Foods (#)</p>
        </div>

        <div className="row" id="foodDisplay">
          {this.state.foods.map((f, i) =>
            <FoodComponent food={f} key={i}/>
          )}
        </div>
        <form>
        	<div className="form-group">
	        	<input className="formInput" id="food_name" type="text" placeholder="Food Name"/>
			</div>
			  <div className="form-group">
	        	<input className="formInput" id="shelf_life" type="text" placeholder="Shelf Life"/>
			  </div>
	        <button id="submitBtn" onClick={(e)=>{ console.log('this from handle', this, e);this.handleClick()}}>Search</button>
        </form>
      </div>
    );
  }
}
