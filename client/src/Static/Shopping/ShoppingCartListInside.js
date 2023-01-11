import React from "react";

function ShoppingCartListInside({
  handleDelete,
  eachItem,
  eachOrder,
  setEditQuantity,
  handleEdit,
}) {
  return (
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
  );
}

export default ShoppingCartListInside;
