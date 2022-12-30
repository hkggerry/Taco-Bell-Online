import React, { useState, useContext } from "react";
import { CustomerContext } from "../useContext/Customer";

function MenuCard({ food }) {
  const { customer } = useContext(CustomerContext);
  const [inCart, setInCart] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Order has been added to cart");
    fetch(`/carts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_id: customer.id,
        menu_id: food.id,
      }),
    })
      .then((res) => res.json())
      .then((addFood) => {
        setInCart(true);
        console.log(addFood);
      });
  }

  function clickIngredient() {
    alert(food.ingredients);
  }
  return (
    <div className="item">
      <img src={food.image_url} alt={food.name} height="250px" />
      <h4>{food.name}</h4>${food.price} | {food.calories} Cal
      <p onClick={clickIngredient}>Nutrition Info: &#127790;</p>
      {inCart ? (
        <u>Added </u>
      ) : (
        <button onClick={handleSubmit}>Add to Cart </button>
      )}
    </div>
  );
}

export default MenuCard;
