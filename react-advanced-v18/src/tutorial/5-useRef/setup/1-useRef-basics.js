import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements


const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('in handleSubmit')
    console.log(divContainer);
    console.log(divContainer.current.value);

    

  };
  useEffect(() => {
    console.log(refContainer);
    console.log(refContainer.current);
    refContainer.current.focus();
  },[]);
  return (
    <form action="" className='form' onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer} />
      </div>
      <button type='submit'>Submit</button>
      <div ref={divContainer}>hello word</div>
    </form>
  );
};

export default UseRefBasics;
