import React from "react";

export default function EventHandlingComponent() {

  const clickHandler = (e) => {
    console.log(123111, e)
  }  
    
  return (
    <div>
      <h1>Hello World</h1>
      <button className="btn" onClick={clickHandler}>
        Submit Form
      </button>
    </div>
  );
}
