import React from "react";

export const ConditionalRenderingComponent = () => {
  const isLoggedIn = true;
//   return <div>Welcome {isLoggedIn ? "User" : "Not Registered   "}</div>;
  return <div>Welcome {isLoggedIn && "User"}</div>;

};
