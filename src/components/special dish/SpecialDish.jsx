import React, { useEffect, useState } from "react";
import { FaBackward, FaForward, FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SpecialDish.css";
import Card from "../Card/Card";

const SpecialDish = () => {
  const settings = {
    dots: true,
    infinite: true, // Set it true here and remove from responsive
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [recipes, setRecipes] = useState([]);
  const slider = React.useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials);
      });
  }, []);

  return (
    <div className="container-md mt-5">
      <p className="text-danger fw-bold">SPECIAL DISHES</p>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="fw-bold">Standout Dishes From Our Menu</h1>
      </div>
      <div className="card-div">
        <Slider {...settings}>
          {recipes.map((popItems, i) => (
            <Card key={i} popItems={popItems} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDish;
