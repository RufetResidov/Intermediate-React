import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("")
  const [isFalse, setIsFalse] = useState(false)
  // const firstValue = text || 'hello world';
  // const secondValue = text && 'hello world';

  return (
    <div>
      <h1>{text || "Rufat Rashid"}</h1>
      <h2>{isFalse ? (<h2>Erroordu qaqa</h2>) : (<h2>Error deyil</h2>)}</h2>
      <button className='btn' onClick={() => setIsFalse(!isFalse)}>Hide</button>
    </div>
  );
};

export default ShortCircuit;
