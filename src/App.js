import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Mini', age: '26' },
      { name: 'Stephanie', age: '24' }
    ],
  });

  const [otherState, setOtherState] = useState('someValue');

  const switchNameHandler = () => {
    console.log('Was clicked');
    // The below state manipulation doesnt work
    // this.state.persons[0].name = 'Maximillian'
    setPersonsState({
      persons: [
        { name: 'Maximillian', age: '28' },
        { name: 'Mini', age: '26' },
        { name: 'Stephanie', age: '18' }
      ]
    })
  }

  return(
    <div className="App">
      <h1>Hi, this is react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies are : Gaming</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;

// state = {
//   persons: [
//     { name: 'Max', age: '28' },
//     { name: 'Mini', age: '26' },
//     { name: 'Stephanie', age: '24' }
//   ],
//   otherState: 'someValue'
// }

// switchNameHandler = () => {
//   console.log('Was clicked');
//   // The below state manipulation doesnt work
//   // this.state.persons[0].name = 'Maximillian'
//   this.setState({
//     persons: [
//       { name: 'Maximillian', age: '28' },
//       { name: 'Mini', age: '26' },
//       { name: 'Stephanie', age: '18' }
//     ]
//   })
// }
