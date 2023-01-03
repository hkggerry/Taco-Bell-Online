import React, { useState, useEffect } from "react";
import MenuPreview from "./MenuPreview";

function Home() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("/categories")
      .then((resp) => resp.json())
      .then((category) => setCategory(category));
  }, []);
  const eachCategory = category.map((foodType) => {
    return <MenuPreview key={foodType.id} foodType={foodType} />;
  });

  return (
    <div>
      <hr />
      <img
        src="https://static-prod.adweek.com/wp-content/uploads/2022/05/doja-cat-mexican-pizza-taco-bell-2022.jpg"
        alt="Doja Cat"
        height="500px"
      ></img>
      <h3>Menu Preview</h3>
      <div class="container1">{eachCategory}</div>
    </div>
  );
}

export default Home;
