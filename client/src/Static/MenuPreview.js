import React from "react";

function MenuPreview({ foodType }) {
  const preview = foodType.menu.map((eachFood) => <p>{eachFood.name}</p>);
  return (
    <div>
      <center>
        <b>{foodType.category}</b>
        <hr />
        {preview}
      </center>
    </div>
  );
}
export default MenuPreview;
