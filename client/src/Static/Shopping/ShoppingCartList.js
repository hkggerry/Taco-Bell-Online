import React from "react";

function ShoppingCartList({
  eachItem,
  onDeleteItem,
  eachOrder,
  toggle,
  setToggle,
}) {
  function handleDelete(e) {
    e.preventDefault();
    console.log("Delete!", eachOrder);
    fetch(`/carts/${eachOrder.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteItem(eachItem);
      setToggle(!toggle);
    });
  }

  // const formValues = {
  //   id: eachOrder.id,
  //   customer_id: eachOrder.customer_id,
  //   menu_id: eachOrder.menu_id,
  //   quantity: eachOrder.quantity,
  // };
  // setDropDown(formValues);

  function handleEdit(e) {
    e.preventDefault();
    console.log("Edit!", eachOrder);
    fetch(`/carts/${eachOrder.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: eachOrder.quantity,
      }),
    })
      .then((resp) => resp.json())
      .then((updatedQuantity) => {
        console.log(updatedQuantity);
      });
  }

  return (
    <div>
      <div>
        <h3>
          {eachItem.name} - ${eachItem.price}
          <form>
            <select name="selectList" id="selectList" onChange={handleEdit}>
                <option value="1">1</option> <option value="2">2</option>
              <option value="3">3</option> <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </form>
          <p onClick={handleDelete}>&#10060;</p>
        </h3>
        <img src={eachItem.image_url} alt={eachItem.name} height="250px" />
      </div>
    </div>
  );
}

export default ShoppingCartList;
