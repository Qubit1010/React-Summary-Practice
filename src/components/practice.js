import React from "react";

// export default function Practice() {
//   return (
//     <div>
//         <h1>Hello World</h1>
//     </div>
//   )
// }

export const Practice = (props) => {
  return (
    <div>
      <h1>Hello World {1 + 2}</h1>
      <h3>
        your name {props.name}, your age {props.age}
      </h3>
      {/* {props.children} */}
    </div>
  );
};
