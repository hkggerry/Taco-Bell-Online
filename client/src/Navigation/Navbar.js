import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { CustomerContext } from "../useContext/Customer";

function Navbar() {
  const { customer, logout, loggedIn } = useContext(CustomerContext);
  const navigate = useNavigate();

  const logoutCustomer = () => {
    fetch("/logout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      logout();
      navigate("/");
    });
  };

  const linkStyles = {
    display: "inline",
    width: "70px",
    padding: "4px",
    margin: "0 6px 6px",
    color: "black",
  };

  if (loggedIn) {
    return (
      <div>
        <h3>Welcome back {customer.name}!</h3>
        <NavLink to="/" style={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/menu" style={linkStyles}>
          Menu
        </NavLink>
        <NavLink to="/delivery" style={linkStyles}>
          Delivery
        </NavLink>
        <NavLink to="/shoppingcart" style={linkStyles}>
          Shopping Cart
        </NavLink>
        <NavLink style={linkStyles} onClick={logoutCustomer}>
          Logout
        </NavLink>
      </div>
    );
  } else {
    return (
      <div>
        <NavLink to="/" style={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/menu" style={linkStyles}>
          Menu
        </NavLink>
        <NavLink to="/delivery" style={linkStyles}>
          Delivery
        </NavLink>
        <NavLink to="/login" style={linkStyles}>
          Shopping Cart
        </NavLink>
        <NavLink to="/login" style={linkStyles}>
          Login
        </NavLink>
      </div>
    );
  }
}

export default Navbar;
