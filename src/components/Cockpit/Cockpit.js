import React from 'react';

const cockpit = (props) => {
  let classes = [];
  if (props.persons.length <= 2) {
    classes.push('red');
  }
  if (props.persons.length <= 1) {
    classes.push('bold');
  }
  return (
    <div>
      <h1>Hi, this is react app</h1>
      <p className={props.classes.join(' ')}>Classes Dynamic Demo</p>
      {/* <button style={style} onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button> */}
      <button style={style} onClick={this.togglePersonsHandler}>
        Toggle Persons
      </button>
    </div>
  )
}

export default React.memo(cockpit);
