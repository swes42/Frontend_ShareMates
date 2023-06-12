import facade from "../api/apiFacade.js";
import React, { useState, useEffect } from "react";

export default function Register() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [repeatPassword, setRepeatPassword] = useState(""); //Separate usestate for checking the passwords match
  const [message, setMessage] = useState("");

  function addUser() {
    if (user.password === repeatPassword) {
      facade
        .addUser(user)
        .then((data) => {
          console.log("User created.");
          setMessage("User created!");
        })
        .catch((err) => {
          if (err.status) {
            err.fullError.then((e) => {
              console.log(e.message);
              setMessage(e.message);
            });
          } else {
            console.log("Error occurred!");
            setMessage("Error occurred!");
          }
        });
    } else {
      setMessage("Password doesnt match? ");
    }
  }

  const onChange = (evt) => {
    setUser({ ...user, [evt.target.id]: evt.target.value });
  };

  const onChangeRepeatPassword = (evt) => {
    setRepeatPassword(evt.target.value);
  };

  return (
    <div>
      <h2>Sign up mate!</h2>
      <label htmlFor="username">Username</label>
      <br></br>
      <input
        type="text"
        className="textInputField"
        id="username"
        onChange={onChange}
      />
      <br></br>

      <label htmlFor="password">Password</label>
      <br></br>
      <input
        type="password"
        className="textInputField"
        id="password"
        onChange={onChange}
      />
      <br></br>

      <label htmlFor="password2">Re-enter password</label>
      <br></br>
      <input
        type="password"
        className="textInputField"
        id="password2"
        onChange={onChangeRepeatPassword}
      />
      <button onClick={addUser}>Register</button>
      <p>{message}</p>
    </div>
  );
}
