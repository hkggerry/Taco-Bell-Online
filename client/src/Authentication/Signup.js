import React, { useState, useContext } from "react";
import { CustomerContext } from "../useContext/Customer";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            <div class="mb-3">
              <label htmlFor="username" class="form-label">
                Email Address:
              </label>
              <input
                class="form-control"
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label htmlFor="password" class="form-label">
                Password:
              </label>
              <input
                class="form-control"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div class="mb-3">
            <label htmlFor="name" class="form-label">
              Name:
            </label>
            <input
              class="form-control"
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div class="form-text">What should we call you?</div>
          </div>
          <br />
          <input
            type="submit"
            value="create your account"
            class="btn btn-secondary"
          />
        </form>
        <ul>{errorsList}</ul>
      </center>
    </div>
  );
}

export default Signup;
