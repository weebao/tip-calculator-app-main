import React, {useState} from 'react';
import Error from './Error.js';
import '../styles/App.css';

function People({people, dispatch, inputRef}) {
  function handleNum(event) {
    let peopleNum = event.target.value;
    dispatch({
      type: 'people',
      payload: Math.round(peopleNum),
    })
  }

  return (
    <div>
      <div className="label">
        <label>Number of People</label>
        <Error value={people} errorRef={inputRef}/>
      </div>
      <input 
        type="number" 
        id="people" 
        placeholder="0" 
        className="input-form hide-spin"
        ref={inputRef}
        onChange={handleNum}
        onBlur={event => event.target.value = people}
      />
    </div>
  );
}

export default People;