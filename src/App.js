import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
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

        <UserInput />
        <UserOutput userName='Max'/>
        <UserOutput userName='Mini'/>
        <UserOutput userName='Stephanie'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
