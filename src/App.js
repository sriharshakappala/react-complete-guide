import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <h1>Hi, this is react app</h1>
    //   </div>
    // );
    return React.createElement('div', null, 'h1', 'This is sample react app');
  }
}

export default App;
