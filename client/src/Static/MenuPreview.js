import React, { useState } from "react";

function MenuPreview({ foodType }) {
  const [isClicked, setIsClicked] = useState([]);

  return (
    <div>
      <center>
        <button
          onClick={() =>
            setIsClicked(
              foodType.menu.map((eachFood) => <p>{eachFood.name}</p>)
            )
          }
        >
          {foodType.category}
        </button>
        {isClicked}
      </center>
    </div>
  );
}
export default MenuPreview;
