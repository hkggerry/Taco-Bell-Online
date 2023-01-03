import React from "react";

function MenuFilter({ foodType }) {
  console.log(foodType.menu);
  return (
    <div>
      <center>
        <button>{foodType.category}</button>
      </center>
    </div>
  );
}
export default MenuFilter;
