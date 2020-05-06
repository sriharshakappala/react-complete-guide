import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <Person name='Max' age='28' />
        <Person name='Mini' age='26'>My hobbies are : Gaming</Person>
        <Person name='Stephanie' age='24' />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
