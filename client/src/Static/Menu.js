import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("/menus")
      .then((resp) => resp.json())
      .then((menu) => setMenu(menu));
  }, []);

  const menuData = menu.map((eachFood) => {
    return <MenuCard key={eachFood.id} food={eachFood} />;
  });

  return (
    <div>
      <hr />
      <h2>Order Online - Free Delivery</h2>
      <div class="container">{menuData}</div>
    </div>
  );
}

export default Menu;
