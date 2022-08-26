import React from 'react';
import '../styles/App.css'

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Display({tipPerPerson, totalPerPerson}) {

  return (
    <div>
      <span className="display-amount">
        <div className="display-label">
          <h4>Tip Amount</h4>
          <h5>/ person</h5>
        </div>
        <h1>{formatter.format(tipPerPerson)}</h1>
      </span>
      <span className="display-amount">
        <div className="display-label">
          <h4>Total</h4>
          <h5>/ person</h5>
        </div>
        <h1>{formatter.format(totalPerPerson)}</h1>
      </span>
    </div>
  );
}

export default Display;