import React from 'react';
import Error from './Error.js';
import '../styles/App.css';

var formatter = new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 2
});

function Bill({bill, dispatch, inputRef}) {
  function handleBill(event) {
    if (!isNaN(event.target.value)) {
      let billAmount = Math.round((event.target.value) * 100) / 100;
      dispatch({
        type: 'bill',
        payload: billAmount,
      })
    }
  }

  return (
    <div>
      <div className="label">
        <label>Bill</label>
        <Error value={bill} errorRef={inputRef} />
      </div>
      <input 
        type="text" 
        className="input-form" 
        id="bill" 
        placeholder="0.00"
        ref={inputRef}
        onFocus={event => {
          event.target.value = bill;
        }} 
        onChange={handleBill}
        onBlur={event => {
          event.target.value = formatter.format(bill);
        }}
      />
    </div>
  );
}

export default Bill;