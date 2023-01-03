import React, { useState, useEffect } from "react";
import MenuCard from "./MenuCard";
import MenuFilter from "./MenuFilter";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/menus")
      .then((resp) => resp.json())
      .then((menu) => setMenu(menu));
  }, []);

  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((category) => {
        setCategory(category);
      });
  }, []);

  const menuData = menu.map((eachFood) => {
    return <MenuCard key={eachFood.id} food={eachFood} />;
  });

  const eachCategory = category.map((foodType) => {
    return <MenuFilter key={foodType.id} foodType={foodType} />;
  });

  return (
    <div>
      <hr />
      <h2>Order Online - Free Delivery</h2>
      <div class="container1">{eachCategory}</div>
      <div class="container">{menuData}</div>
    </div>
  );
}

export default Menu;
