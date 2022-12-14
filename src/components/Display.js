import React from 'react';
import '../styles/App.css'

// Formatting tip and total values for display
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Display({tipPerPerson, totalPerPerson}) {

  return (
    <div>
      <div className="display-amount">
        <div className="display-label">
          <h4>Tip Amount</h4>
          <h5>/ person</h5>
        </div>
        <h3>{formatter.format(tipPerPerson)}</h3>
      </div>
      <div className="display-amount">
        <div className="display-label">
          <h4>Total</h4>
          <h5>/ person</h5>
        </div>
        <h3>{formatter.format(totalPerPerson)}</h3>
      </div>
    </div>
  );
}

export default Display;