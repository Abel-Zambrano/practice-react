import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';


const App = () => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
            {name: 'Ethan', age: 6},
            {name: 'Chloe', age: 3}
          ]
  });

  const [ otherState, setOtherState ] = useState({
    otherState: 'Some value'
  })

  console.log(personsState, otherState);
  

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Sir Ethan!!', age: 6},
        {name: 'Chloe', age: 3}
      ]
    })
  }
  
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler} >Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >Favorite Food: Pizza</Person>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      </div>
    ); 
    }

export default App;

// class App extends Component {
//   state = {
//     persons: [
//       {name: 'Ethan', age: 6},
//       {name: 'Chloe', age: 3}
//     ],
//     otherState: 'Some value'
//   }

//   switchNameHandler = () => {
//     // console.log('Button Clicked!!');
//     this.setState({
//       persons: [
//         {name: 'Sir Ethan!!', age: 6},
//         {name: 'Chloe', age: 3}
//       ],
//     })
//   }