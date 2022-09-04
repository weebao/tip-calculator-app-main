import './styles/App.css';
import {useReducer, useRef} from 'react';
import Bill from './components/Bill.js';
import Tip from './components/Tip.js';
import People from './components/People.js';
import Display from './components/Display.js';
import logo from './images/logo.svg';

function reducer(state, action) {
  switch(action.type) {
    case 'bill':
      state = {...state, bill: action.payload};
      return calculate(state, state.bill, state.tip, state.people);
    case 'tip':
      state = {...state, tip: action.payload};
      return calculate(state, state.bill, state.tip, state.people);
    case 'people':
      state = {...state, people: action.payload};
      return calculate(state, state.bill, state.tip, state.people);
    case 'reset':
      return {
        bill: '',
        tip: 0,
        people: '',
        tipPerPerson: 0,
        totalPerPerson: 0,
      };
  }
}

function calculate(state, bill, tip, people) {
  let tipPerPerson = state.tipPerPerson;
  let totalPerPerson = state.totalPerPerson;

  if (bill >= 0 && tip >= 0 && people > 0) {
    tipPerPerson = (bill * tip / 100) / people;
    totalPerPerson = (bill / people) + tipPerPerson;
    console.log('calculated');
  }
  return {...state, tipPerPerson: tipPerPerson, totalPerPerson: totalPerPerson};
}

function App() {
  const [{bill, tip, people, tipPerPerson, totalPerPerson}, dispatch] = useReducer(reducer, {
    bill: '',
    tip: 0,
    people: '',
    tipPerPerson: 0,
    totalPerPerson: 0,
  });

  const billRef = useRef(null);
  const tipRef = useRef(null);
  const peopleRef = useRef(null);

  function handleReset(event) {
    billRef.current.value = '';
    tipRef.current.value = '';
    peopleRef.current.value = '';

    billRef.current.classList.remove('error-input');
    tipRef.current.classList.remove('error-input');
    peopleRef.current.classList.remove('error-input');

    dispatch({type: 'reset'});
  }

  return (
    <div className="App">
      <header>
        <h1>Splitter</h1>
        <img src={logo} alt="Logo of Splitter being divided to two lines" />
      </header>
      <main className="bill-card">
        <div className="bill-input">
          <Bill bill={bill} dispatch={dispatch} inputRef={billRef}/>
          <Tip tip={tip} dispatch={dispatch} inputRef={tipRef}/>
          <People people={people} dispatch={dispatch} inputRef={peopleRef}/>
        </div>
        <div className="bill-display">
          <Display tipPerPerson={tipPerPerson} totalPerPerson={totalPerPerson}/>
          <button className="reset-btn" onClick={handleReset}>RESET</button>
        </div>
      </main>
    </div>
  );
}

export default App;
