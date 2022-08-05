import React from "react";
import { useState } from "react";

import "./Form.css";

const Form = (props) => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const usernameChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const userpasswordChangeHandler = (e) => {
    setUserPassword(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(userName, userPassword);

    const formData = {
      name: userName,
      password: userPassword
    }
    

    console.log(formData)
    props.onAddItems(formData);

    setUserName("");
    setUserPassword("");
  };

 

  return (
    <div>
      <form action="" className="form-container" onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={userName}
          onChange={usernameChangeHandler}
        />{" "}
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={userPassword}
          onChange={userpasswordChangeHandler}
        />
        <button type="submit" className="form-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
