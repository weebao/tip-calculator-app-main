import React from 'react';
import '../styles/App.css';

function Error({value, errorRef}) {
  if (value !== '') {
    // Check if negative
    if (value < 0) {
      errorRef.current.classList.add('error-input');
      console.log(errorRef.current.classList);
      return (<span className="error-msg">Can't be negative</span>)
    }
    // Check if zero
    if (value == 0) {
      errorRef.current.classList.add('error-input');
      return (<span className="error-msg">Can't be zero</span>)
    }
    errorRef.current.classList.remove('error-input');
  }
}

export default Error;