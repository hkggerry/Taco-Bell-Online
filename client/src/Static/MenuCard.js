import React, { useContext } from "react";
import { CustomerContext } from "../useContext/Customer";

function MenuCard({ food }) {
  const { customer } = useContext(CustomerContext);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Clicked!");
    console.log(food.id);
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
      .then((addFood) => console.log(addFood));
  }

  function clickIngredient() {
    alert(food.ingredients);
  }
  return (
    <div className="item">
      <img src={food.image_url} alt={food.name} height="250px" />
      <h4>{food.name}</h4>${food.price} | {food.calories} Cal
      <p onClick={clickIngredient}>Nutrition Info: &#127790;</p>
      <button onClick={handleSubmit}>Add to Cart</button>
      {/* <form onSubmit={handleSubmit}>
        <select name="selectList" id="selectList">
            <option value="1">1</option> <option value="2">2</option>
        </select>
        <input type="submit" value="Add to cart" />
      </form> */}
    </div>
  );
}

export default MenuCard;
