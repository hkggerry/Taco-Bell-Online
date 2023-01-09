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
        <hr />
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label htmlFor="username" class="form-label">
              Email:
            </label>
            <input
              class="form-control"
              type="text"
              name="username"
              placeholder="Email Address"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label htmlFor="password" class="form-label">
              Password:
            </label>
            <input
              class="form-control"
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="submit" value="Login" class="btn btn-secondary" />
          <br /> <br />
          <h5 onClick={navigateLogin}>Don't have an account?</h5>
        </form>
      </center>
    </div>
  );
}

export default Login;
