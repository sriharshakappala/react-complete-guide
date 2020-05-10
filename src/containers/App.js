import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary'

import UserInput from '../components//UserInput/UserInput';
import UserOutput from '../components//UserOutput/UserOutput';

import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';

// import Radium, {StyleRoot} from 'radium'

import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: '28' },
      { id: '2', name: 'Mini', age: '26' },
      { id: '3', name: 'Stephanie', age: '24' }
    ],
    otherState: 'someValue',
    username: 'SuperMax',
    showPersons: false,
    userInput: '',
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // const person = this.state.persons[personIndex];
    const person = {
      ...this.state.persons[personIndex]
    };
    // Alternative Approach - const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});
    // this.setState({
    //   persons: [
    //     { name: 'Max', age: '28' },
    //     { name: event.target.value, age: '26' },
    //     { name: 'Stephanie', age: '18' }
    //   ]
    // })
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

  inputChangedHandler = (event) => {
    this.setState({userInput: event.target.value});
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      }
    };
    let persons = null;
    const charList = this.state.userInput.split('').map((c, index) => {
      return <Char character={c} key={index} clicked={() => this.deleteCharHandler(index)} />
    })
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

          {/* {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}><Person click={() => this.deletePersonHandler(index)} name={person.name} age={person.age}
                    changed={(event) => this.nameChangedHandler(event, person.id)} /></ ErrorBoundary>
          })} */}
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.nameChangedHandler} />
        </div>
      )
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'orange',
        color: 'black',
      };
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi, this is react app</h1>
        <p className={classes.join(' ')}>Classes Dynamic Demo</p>
        {/* <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        { persons }

        <UserInput changed={this.userNameChangedHandler} currentName={this.state.username} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName='Mini'/>
        <UserOutput userName='Stephanie'/>

        {/* Assignment 2 */}
        <h2>Assignment 2</h2>
        <input type='text' onChange={this.inputChangedHandler} value={this.state.userInput} />
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length} />
        {charList}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
