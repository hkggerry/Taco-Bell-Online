import React, { useState } from "react";

function ShoppingCartList({ eachItem, onDeleteItem, eachOrder, updateCart }) {
  const [editEachOrder, setEditEachOrder] = useState(eachOrder);
  const [editQuantity, setEditQuantity] = useState();

  function handleDelete() {
    fetch(`/carts/${eachOrder.id}`, {
      method: "DELETE",
    });
    onDeleteItem(eachOrder);
  }

  function handleEdit(e) {
    e.preventDefault();
    fetch(`/carts/${editEachOrder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: editQuantity,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedQuantity) => {
        console.log(updatedQuantity);
        updateCart(updatedQuantity);
      });
  }

  return (
    <div>
      <div>
        <h5>
          <b onClick={handleDelete}>
            {eachItem.name} - ${eachOrder.total} &#10060;
          </b>
          <form>
            <select
              name="selectList"
              id="selectList"
              onChange={(e) => setEditQuantity(e.target.value)}
            >
                <option value="1">1</option> <option value="2">2</option>
              <option value="3">3</option> <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <button onClick={handleEdit}>Change</button>
          </form>
        </h5>
      </div>
    </div>
  );
}

export default ShoppingCartList;
