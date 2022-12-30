import React, { useState, useEffect, useContext } from "react";
import { CustomerContext } from "../../useContext/Customer";
import ShoppingCartList from "./ShoppingCartList";

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const { customer } = useContext(CustomerContext);

  useEffect(() => {
    fetch("/carts")
      .then((resp) => resp.json())
      .then((cartItems) => {
        setCart(cartItems);
      });
  }, []);

  const memberCart = cart.filter((x) => x.customer_id === customer.id);

  const cartItem = memberCart.map((x) => {
    return <ShoppingCartList key={x.id} eachItem={x.menu} />;
  });

  return (
    <div>
      <hr />
      {cartItem}
    </div>
  );
}

export default ShoppingCart;
