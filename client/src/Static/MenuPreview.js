import React from "react";
import MenuPreviewCard from "./MenuPreviewCard";

function MenuPreview({ foodType }) {
  const click = foodType.menu.map((eachFood) => {
    return <MenuPreviewCard key={eachFood.id} eachFood={eachFood} />;
  });
  return (
    <div>
      <center>
        <u>{foodType.category}</u>
        {click}
      </center>
    </div>
  );
}
export default MenuPreview;
