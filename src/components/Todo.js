import React, { useState } from 'react';

const todo = props => {
  const inputState = useState('');
  
  const inputChangedHandler = (event) => {
    inputState[1](event.target.value);
  };
  
  return (
    <>
      <input
        type="text"
        placeholder="Todo"
        onChange={inputChangedHandler}
        value={inputState[0]}
      />
      <button type="button">Add</button>
      <ul />
    </>
  )
};

export default todo;