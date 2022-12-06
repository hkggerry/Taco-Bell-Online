import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyles = {
    display: "inline",
    width: "70px",
    padding: "4px",
    margin: "0 6px 6px",
    color: "black",
  };
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
      <NavLink to="/shoppingcart" style={linkStyles}>
        Shopping Cart
      </NavLink>
      <NavLink to="/logout" style={linkStyles}>
        Logout
      </NavLink>
    </div>
  );
}

export default Navbar;
