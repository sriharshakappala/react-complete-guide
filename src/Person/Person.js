import React from 'react';
// import './Person.css';
import Test from '../Test/Test';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px'
    }
  };
  const rnd = Math.random();
  if (rnd > 0.7) {
    throw new Error('something went wrong!!!');
  }
  return(
    // <div className='Person' style={style}>
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name} />
      <Test xname={props.name + 'Child'} />
    </StyledDiv>
    // </div>
  )
}

export default person;
