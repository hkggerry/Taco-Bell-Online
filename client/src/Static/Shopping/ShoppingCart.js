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
        // setToggle(!toggle);
      });
  }, []);

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

  return (
    <div>
      <hr />
      {cartItem}
    </div>
  );
}

export default ShoppingCart;
