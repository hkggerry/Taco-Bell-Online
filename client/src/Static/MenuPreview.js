import React from "react";

function MenuPreview({ foodType }) {
  const preview = foodType.menu.map((eachFood) => <p>{eachFood.name}</p>);
  return (
    <div>
      <center>
        <button class="btn btn-warning">{foodType.category}</button>
        {preview}
      </center>
    </div>
  );
}
export default MenuPreview;
