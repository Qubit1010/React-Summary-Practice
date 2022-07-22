import React from "react";

export const ChildComponent = (props) => {
  return (
    <div>
      {/* <button onClick={props.greetHandler}>Child-Component</button> */}
      <button onClick={() => props.greetHandler('child')}>Child-Component</button>
        
    </div>
  );
}
