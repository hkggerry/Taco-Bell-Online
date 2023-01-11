import React, { useState, useEffect, useContext } from "react";
import { CustomerContext } from "../../useContext/Customer";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [toggle, setToggle] = useState(true);
  const { customer } = useContext(CustomerContext);

  useEffect(() => {
    fetch("/carts")
      .then((resp) => resp.json())
      .then((cartItems) => {
        setCart(cartItems);
      });
  }, [toggle]);

  function handleDeleteCart(deletedItem) {
    console.log("deletedItem", deletedItem);
    const updatedItem = cart.filter((cart) => cart.id !== deletedItem.id);
    setCart(updatedItem);
    setToggle(!toggle);
  }

  const memberCart = cart.filter((x) => x.customer_id === customer.id);

  const cartItem = memberCart.map((x) => {
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
  });
  var total = memberCart.map((y) => y.total);
  var sum = 0;

  total.forEach((x) => (sum += x));

  return (
    <div>
      <hr />
      <div class="container2"> {cartItem}</div>
      ---------------------------------------------------
      <h2>Total: ${sum}</h2>
    </div>
  );
}

export default ShoppingCart;
