import React, { useState, useContext } from "react";
import { CustomerContext } from "../useContext/Customer";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(CustomerContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((member) => {
        if (!member.errors) {
          login(member);
          navigate("/");
        } else {
          setUsername("");
          setPassword("");
        }
      });
  }

  function navigateLogin() {
    navigate("/signup");
  }
  return (
    <div>
      <center>
        <br />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Email:</label>
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
          <br />
          <input type="submit" value="Login" />
          <h4 onClick={navigateLogin}>Don't have an account?</h4>
        </form>
      </center>
    </div>
  );
}

export default Login;
