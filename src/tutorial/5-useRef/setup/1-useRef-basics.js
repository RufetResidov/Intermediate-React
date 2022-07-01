import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={refContainer} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default UseRefBasics;
