import React from "react";
import { useState } from "react";

export const PostForm = () => {
  const [userID, setUserID] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: userID,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <form action="" onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          placeholder="User ID"
          
          onChange={(e) => setUserID(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Body"
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
