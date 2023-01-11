import React, { useState, useContext } from "react";
import { CustomerContext } from "../useContext/Customer";
import MenuCategory from "./MenuCategory";

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
        quantity: 1,
      }),
    })
      .then((res) => res.json())
      .then((addFood) => {
        setInCart(true);
        console.log(addFood);
      });
  }

  const categoryMap = food.categories.map((eachCategory) => {
    return <MenuCategory key={eachCategory.id} eachCategory={eachCategory} />;
  });

  function clickIngredient() {
    alert(food.ingredients);
  }
  return (
    <div className="rcorners2">
      <img src={food.image_url} alt={food.name} height="250px" />
      <h5>{food.name}</h5>
      <p>{categoryMap}</p>${food.price} | {food.calories} Cal
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
