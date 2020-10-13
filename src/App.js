import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Ethan', age: 6},
      {name: 'Chloe', age: 3}
    ],
  }

  switchNameHandler = () => {
    console.log('Button Clicked!!');
    
  }

  render(){
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler} >Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Favorite Food: Pizza</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
      </div>
    ); 
  }
}

export default App;
