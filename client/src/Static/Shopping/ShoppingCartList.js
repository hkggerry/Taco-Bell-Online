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
    console.log("Delete!");
    fetch(`/carts/${eachOrder.id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteItem(eachItem);
      setToggle(!toggle);
    });
  }
  return (
    <div>
      <div>
        <h3>
          {eachItem.name} - ${eachItem.price}{" "}
          <form>
            <select name="selectList" id="selectList">
                <option value="1">1</option> <option value="2">2</option>
              <option value="3">3</option>
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
