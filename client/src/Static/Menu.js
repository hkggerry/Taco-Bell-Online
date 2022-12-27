import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

function Menu() {
  const [menu, setMenu] = useState([]);
  // const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch("/menus")
      .then((resp) => resp.json())
      .then((menu) => setMenu(menu));
  }, []);

  // function getDefaultCart() {
  //   const cart = {};
  //   for (let i = 1; i < menu.length + 1; i++) {
  //     cart[i] = 0;
  //   }
  //   return cart;
  // }

  // const cartItemAmount = cartItems[menu.id];

  const menuData = menu.map((eachFood) => {
    return <MenuCard key={eachFood.id} food={eachFood} />;
  });

  return (
    <div>
      <h2>Order Online - Free Delivery</h2>
      <div class="container">{menuData}</div>
    </div>
  );
}

export default Menu;
