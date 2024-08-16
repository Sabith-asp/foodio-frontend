import React from "react";
import "./Home.css";
import { FaPlay } from "react-icons/fa6";
import homeImg from "../../../public/images/home/banner.png";
import homeItemImg from "../../../public/images/home/b-food1.png";
import popItem1 from "../../../public/images/home/category/img1.png";
import popItem2 from "../../../public/images/home/category/img2.png";
import popItem3 from "../../../public/images/home/category/img3.png";
import popItem4 from "../../../public/images/home/category/img4.png";
import SpecialDish from "../../components/special dish/SpecialDish";
import Testimonial from "../../components/testimonial/Testimonial";
import Ourstoryandservices from "../../components/ourstoryandsercices/Ourstoryandservices";

const popularCategories = [
  {
    name: "Main dish",
    noOfDishes: 89,
    imgURL: popItem1,
  },
  {
    name: "Break Fast",
    noOfDishes: 27,
    imgURL: popItem2,
  },
  {
    name: "Dessert",
    noOfDishes: 67,
    imgURL: popItem3,
  },
  {
    name: "Browse All",
    noOfDishes: 277,
    imgURL: popItem4,
  },
];

const Home = () => {
  return (
    <>
      <div className="home container-md">
        <div className="row d-flex flex-column flex-md-row">
          <div className="left py-5 py-md-0 col-md-6 d-flex flex-column justify-content-center">
            <h1 className="fw-bold">
              The One Stop <br /> for Delicious{" "}
              <span className="text-success">Food</span>
            </h1>
            <p className="fs-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              possimus laboriosam facere soluta quisquam deserunt{" "}
            </p>
            <div className="home-buttons">
              <button className="btn bg-success rounded-pill fw-semibold">
                Order
              </button>
              <button className="btn ms-3 fw-semibold rounded-pill">
                <a href="">Watch Video</a>
                <FaPlay className="ms-2 fs-5" />
              </button>
            </div>
          </div>
          <div className="right col-md-6 d-flex position-relative">
            <img src={homeImg} alt="" />

            <div className="homeItems d-none d-lg-flex position-absolute">
              <div className="homeItemsEach  d-flex align-items-center bg-white p-2 me-5">
                <img src={homeItemImg} alt="" />
                <div className="d-flex flex-column mt-2">
                  <h6>Spicy Noodles</h6>
                  <div className="rating flex-start">
                    <input value="5" name="rate" id="star5" type="radio" />
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio" />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      id="star3"
                      type="radio"
                      checked=""
                    />
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio" />
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio" />
                    <label title="text" for="star1"></label>
                  </div>
                  <p>
                    <span>$</span>20.00
                  </p>
                </div>
              </div>
              <div className="homeItemsEach d-none d-xl-flex align-items-center bg-white p-2 me-5">
                <img src={homeItemImg} alt="" />
                <div className="d-flex flex-column mt-2">
                  <h6>Spicy Noodles</h6>
                  <div className="rating flex-start">
                    <input value="5" name="rate" id="star5" type="radio" />
                    <label title="text" for="star5"></label>
                    <input value="4" name="rate" id="star4" type="radio" />
                    <label title="text" for="star4"></label>
                    <input
                      value="3"
                      name="rate"
                      id="star3"
                      type="radio"
                      checked=""
                    />
                    <label title="text" for="star3"></label>
                    <input value="2" name="rate" id="star2" type="radio" />
                    <label title="text" for="star2"></label>
                    <input value="1" name="rate" id="star1" type="radio" />
                    <label title="text" for="star1"></label>
                  </div>
                  <p>
                    <span>$</span>20.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="categories">
        <h1 className="text-center fw-bold mb-5">Popular Categories</h1>
        <div className="popular-categories  container-md w-100 p-0 px-md-5  d-flex flex-column flex-md-row align-items-center w-md-auto justify-content-between">
          {popularCategories.map((popItems) => (
            <div
              data-aos="fade-up"
              className="card d-flex mx-2 justify-content-center align-items-center border-0"
            >
              <div className="popitem-img p-3 mt-1 bg-success rounded-circle">
                <img src={popItems.imgURL} alt="" />
              </div>
              <h5 className="mt-3">{popItems.name}</h5>
              <p className="text-secondary">({popItems.noOfDishes} dishes)</p>
            </div>
          ))}
        </div>
      </div>
      <SpecialDish />
      <Testimonial />
      <Ourstoryandservices />
    </>
  );
};

export default Home;
