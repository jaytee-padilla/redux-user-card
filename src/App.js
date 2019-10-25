import React, { Component } from "react";
import { createStore } from 'redux'; // in order to create a redux store, we need to import the createStore function from redux
import reducer from './reducers'; // reducer is just a function being exported from the index.js file in the reducers folder
import user from "./images/user.png";
import "./App.css";

// initialState is the state I'm initializing the redux store with
const initialState = {
	name: "Alex Bakery",
	description: "Software Engineer, Speaker, and Occasional Model",
	likes: "Cats, Wine, and Black dresses",
	location: "localhost"
}

// The createStore requires at least 1 argument, a reducer function
// The reducer parameter is what tracks the state in our app
// The reducer and the redux store will always remain in sync
// initialState is passed into the imported reducer function as an argument
const store = createStore(reducer, initialState);

class App extends Component {
  render() {
		// Whenever a redux store is created with createStore(), the created store has three exposed methods
		// one of the methods is getState()
		// At any point in time, calling the getState() method on the created store will return the current state of the app
		// On the line below, I am destructuring the data coming in from state
		const { name, description, likes, location } = store.getState();
		
    return (
      <div className="App">
        <section className="User__img">
          <img src={user} alt="user" />
        </section>

        <section className="User__info">
          <p>
            {" "}
            <span className="faint">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="faint">I like</span> {likes}
          </p>

          <p className="User__info__details User__info__divider faint">
            <span>Name: </span>
            <span>{name}</span>
          </p>
          <p className="User__info__details faint">
            <span>Location: </span>
            <span>{location}</span>
          </p>
        </section>
      </div>
    );
  }
}

export default App;
