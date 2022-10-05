import React from 'react';
import '../styles/App.css';

function Tip({tip, dispatch, inputRef}) {
  // Dispatch tip value
  function handleTip(event) {
    let tipAmount = event.target.value;
    dispatch({
      type: 'tip',
      payload: tipAmount,
    })
  }

  return (
    <div>
      <div className="label">Select Tip %</div>
      <div className="tip-percent" onChange={handleTip} >
        {/* Highlight tip button if it matches the custom amount */}
        <input id="tip5" type="radio" checked={tip == 5} name="5" value="5" />
        <label for="tip5">5%</label>
        <input id="tip10" type="radio" checked={tip == 10} name="10" value="10" />
        <label for="tip10">10%</label>
        <input id="tip15" type="radio" checked={tip == 15} name="15" value="15" />
        <label for="tip15">15%</label>
        <input id="tip25" type="radio" checked={tip == 25} name="25" value="25" />
        <label for="tip25">25%</label>
        <input id="tip50" type="radio" checked={tip == 50} name="50" value="50" />
        <label for="tip50">50%</label>
        <span>
          <input type="number" className="input-form hide-spin" autoComplete="off" name="custom-tip" placeholder="Custom" ref={inputRef}/>
        </span>
      </div>
    </div>
  );
}

export default Tip;