import React, { useState, useContext } from "react";
import { CustomerContext } from "../useContext/Customer";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [errorsList, setErrorsList] = useState([]);
  const { signup } = useContext(CustomerContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
        // password_confirmation: passwordConfirmation,
        name: name,
      }),
    })
      .then((res) => res.json())
      .then((customer) => {
        if (!customer.errors) {
          signup(customer);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
          // setPasswordConfirmation("");
          const errorLis = customer.errors.map((e) => <div>{e}</div>);
          setErrorsList(errorLis);
        }
      });
  };
  return (
    <div>
      <center>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email Address:</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div> */}
          <br />
          <br />
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <br />
          <input type="submit" value="create your account" />
        </form>
        <ul>{errorsList}</ul>
      </center>
    </div>
  );
}

export default Signup;
