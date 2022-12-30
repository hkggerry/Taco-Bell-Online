import React from "react";

function ShoppingCartList({ eachItem }) {
  function handleSubmit() {
    console.log("HA!");
  }
  return (
    <div>
      <div>
        <h3>
          {eachItem.name} - ${eachItem.price} &#10060;
          <form onSubmit={handleSubmit}>
            <select name="selectList" id="selectList">
                <option value="1">1</option> <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </h3>
        <img src={eachItem.image_url} alt={eachItem.name} height="250px" />
      </div>
    </div>
  );
}

export default ShoppingCartList;
