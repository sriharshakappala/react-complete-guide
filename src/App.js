import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: '28' },
      { name: 'Mini', age: '26' },
      { name: 'Stephanie', age: '24' }
    ],
    otherState: 'someValue'
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    // The below state manipulation doesnt work
    // this.state.persons[0].name = 'Maximillian'
    this.setState({
      persons: [
        { name: newName, age: '28' },
        { name: 'Mini', age: '26' },
        { name: 'Stephanie', age: '18' }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: '28' },
        { name: event.target.value, age: '26' },
        { name: 'Stephanie', age: '18' }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, 'Max!!')} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}>
          My hobbies are : Gaming
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
