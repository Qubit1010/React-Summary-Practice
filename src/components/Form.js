import React from "react";
import { useState } from "react";

export const Form = () => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your form data ${userName}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
