import React, { useState, useEffect } from "react";
import MenuPreview from "./MenuPreview";
import ImageSlider from "./ImageSlider";

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

  const slides = [
    {
      url:
        "https://static-prod.adweek.com/wp-content/uploads/2022/05/doja-cat-mexican-pizza-taco-bell-2022.jpg",
      title: "Doja",
    },
    {
      url:
        "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-10/Pete-Davidson-taco-bell-te-221003-d47584.jpg",
      title: "Pete Davidsonå",
    },
    {
      url:
        "https://mma.prnewswire.com/media/1720734/Taco_Lover_s_Pass.jpg?p=facebook",
      title: "Taco Lover",
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod/images/taco-bell-nacho-fries-1-jpg-1548356268.jpg",
      title: "Nacho Fries",
    },
    {
      url:
        "https://hips.hearstapps.com/hmg-prod/images/mountain-dew-baja-blast-colada-freeze-social-1621520148.jpg",
      title: "Baja Blast",
    },
  ];

  const containerStyles = {
    width: "800px",
    height: "480px",
    margin: "0 auto",
  };
  return (
    <div>
      <hr />
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <p>&nbsp;</p>

      <u>
        <h4>Menu Preview</h4>
      </u>
      <div class="container1">{eachCategory}</div>
    </div>
  );
}

export default Home;
