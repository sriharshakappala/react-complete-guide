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
    otherState: 'someValue',
    username: 'SuperMax',
    showPersons: false,
  }

  userNameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // Slice without arguments will copy the entire array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'Max!!')} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler}>
            My hobbies are : Gaming
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}

          {this.state.persons.map((person, index) => {
            return <Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age} />
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        {/* <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }

        <UserInput changed={this.userNameChangedHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Mini'/>
        <UserOutput userName='Stephanie'/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
