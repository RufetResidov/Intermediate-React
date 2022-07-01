import React from 'react';
import UseEffectBasics from './tutorial/2-useEffect/final/1-useEffect-basics';
import UseEffectCleanup from './tutorial/2-useEffect/final/2-useEffect-cleanup';
import UseEffectFetchData from './tutorial/2-useEffect/final/3-useEffect-fetch-data';
import ShortCircuit from './tutorial/3-conditional-rendering/final/2-short-circuit';
import ShowHide from './tutorial/3-conditional-rendering/final/3-show-hide';
import ControlledInputs from './tutorial/4-forms/final/2-multiple-inputs';
import Index from './tutorial/6-useReducer/setup';
import ContextAPI from './tutorial/8-useContext/setup/1-context-api';

function App() {
  return (
    <div className='container'>
      <UseEffectBasics />
      <UseEffectCleanup />
      <UseEffectFetchData />
      <ShortCircuit />
      <ShowHide />
      <ControlledInputs />
      <Index/>
      <ContextAPI/>
    </div>
  )
}

export default App
