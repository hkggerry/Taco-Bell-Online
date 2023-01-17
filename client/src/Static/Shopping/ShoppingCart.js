import React, { useState, useEffect } from "react";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCart() {
  // const [cart, setCart] = useState([]);
  const [newCart, setNewCart] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    fetch("/carts")
      .then((resp) => resp.json())
      .then((cartItems) => {
        // setCart(cartItems);
        setNewCart(
          cartItems.map((userItems) =>
            userItems.id === cartItems.id ? cartItems : userItems
          )
        );
      });
  }, [toggle]);

  function handleDeleteCart(deletedItem) {
    console.log("deletedItem", deletedItem);
    const updatedItem = newCart.filter((cart) => cart.id !== deletedItem.id);
    setNewCart(updatedItem);
    setToggle(!toggle);
  }

  // function updateCart(updatedItem) {
  // this is where you will update the cart using the github repo
  // Pass this as a callback
  // Invoke after a successful patch request
  // }

  // const memberCart = cart.filter((x) => x.customer_id === customer.id);

  let total = newCart.map((y) => y.total);
  let sum = 0;

  total.forEach((x) => (sum += x));

  return (
    <div>
      <hr />
      <div class="container2">
        {newCart.map((x) => {
          return (
            <ShoppingCartList
              key={x.id}
              eachOrder={x}
              eachItem={x.menu}
              onDeleteItem={handleDeleteCart}
              toggle={toggle}
              setToggle={setToggle}
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
