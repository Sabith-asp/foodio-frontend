import React, { useState } from "react";
import "./Card.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Card = ({ popItems }) => {
  const [heartClick, setHeartClick] = useState(false);
  const handleClick = () => {
    setHeartClick(!heartClick);
  };
  return (
    <div className=" card1 m-3 m-md-5 p-3 p-md-4 position-relative overflow-hidden">
      <div className="favourite d-flex align-items-center justify-content-center position-absolute top-0 end-0 bg-success">
        <button
          onClick={handleClick}
          className={`btn border-0 ${
            heartClick ? `text-danger` : `text-white`
          }`}
        >
          <FaHeart className="fs-4 " />
        </button>
      </div>
      <Link to="/menu">
        <div className="d-flex flex-column align-items-center">
          <img src={popItems.image} alt="" />
        </div>
      </Link>
      <div>
        <h5 className="my-3 fw-bold text-center">{popItems.name}</h5>
        <p className="description">{popItems.recipe}</p>
        <div className="d-flex justify-content-between">
          <p>₹ {popItems.price}</p>
          <p>
            <FaStar className="text-warning" />
            <span>4.6</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
