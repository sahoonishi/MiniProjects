import React from 'react'
import { useState } from 'react';


const Display = () => {

  const [val,setVal]=useState(1);
  const Increment =()=>{
   setVal(val+1);
    
  };
  const Decrement =()=>{
    
     val>1 ? setVal(val-1): alert("In My world , NO 0");
  };
  return (
    <>
      <div style={{textAlign:"center"}}>
        <h1>{val}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
      </div>
    </>
  )
}

export default Display