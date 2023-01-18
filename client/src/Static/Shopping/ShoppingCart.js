import React, { useState, useEffect } from "react";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("/carts")
      .then((resp) => resp.json())
      .then((cartItems) => {
        setCart(cartItems);
      });
  }, []);

  function handleDeleteCart(deletedItem) {
    const deleteItem = cart.filter((item) => item.id !== deletedItem.id);
    setCart(deleteItem);
  }

  function updateCart(updatedFoodObj) {
    const updatedFood = cart.map((userItem) => {
      if (userItem.id === updatedFoodObj.id) {
        return updatedFoodObj;
      } else {
        return userItem;
      }
    });
    setCart(updatedFood);
  }
  // const memberCart = cart.filter((x) => x.customer_id === customer.id);

  let total = cart.map((y) => y.total);
  let sum = 0;

  total.forEach((x) => (sum += x));

  return (
    <div>
      <hr />
      <div class="container2">
        {cart.map((x) => {
          return (
            <ShoppingCartList
              key={x.id}
              eachOrder={x}
              eachItem={x.menu}
              onDeleteItem={handleDeleteCart}
              toggle={toggle}
              setToggle={setToggle}
              updateCart={updateCart}
            />
          );
        })}
      </div>
      ---------------------------------------------------
      <h2>Total: ${sum}</h2>
    </div>
  );
}

export default ShoppingCart;
