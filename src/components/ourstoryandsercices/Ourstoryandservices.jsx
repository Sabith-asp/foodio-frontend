import React from "react";
import "./Ourstoryandservices.css";
import { IoFastFood } from "react-icons/io5";
import { TbTruckDelivery, TbShoppingCartCopy } from "react-icons/tb";
import { TiGift } from "react-icons/ti";

const Ourstoryandservices = () => {
  return (
    <div className="ourstoryandservices container-md">
      <div className="row py-5 d-flex flex-column flex-md-row">
        <div className="left py-5 py-md-0 col-md-6 d-flex flex-column justify-content-center">
          <h6 className="text-danger fw-bold ">Our Story & Services</h6>
          <h1 className="my-4 fw-bolder">
            Our Culinary Journey <br /> And Services
          </h1>
          <p className="fs-5">
            Rooted in passion, we curate unforgettable dining experiences and
            offer exceptional services, blending culinary artistry with warm
            hospitality.
          </p>
          <div>
            <button className="btn rounded-pill bg-success p-2">Explore</button>
          </div>
        </div>
        <div className="right  py-5 py-md-0 col-md-6 d-flex flex-column align-items-center justify-content-center">
          <div className="row justify-content-center align-items-center text-success">
            <div
              data-aos="fade-up"
              className="card3 col-5 px-3 py-3 d-flex m-3 flex-column justify-content-center align-items-center"
            >
              <IoFastFood className="fs-1 my-4" />
              <h6 className="fw-semibold">CATERING</h6>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
            <div
              data-aos="fade-up"
              className="card3 col-5 px-3 py-3 d-flex m-3 flex-column justify-content-center align-items-center"
            >
              <TbTruckDelivery className="fs-1 my-4" />
              <h6 className="fw-semibold">CATERING</h6>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
            <div
              data-aos="fade-up"
              className="card3 col-5 px-3 py-3 d-flex m-3 flex-column justify-content-center align-items-center"
            >
              <TbShoppingCartCopy className="fs-1 my-4" />
              <h6 className="fw-semibold">CATERING</h6>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
            <div
              data-aos="fade-up"
              className="card3 col-5 px-3 py-3 d-flex m-3 flex-column justify-content-center align-items-center"
            >
              <TiGift className="fs-1 my-4" />
              <h6 className="fw-semibold">CATERING</h6>
              <p>Delight your guests with our flavors and presentation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourstoryandservices;

// .col-5 {
//     flex: 0 0 auto;
//     width: 41.66666667%;
//     padding: 0px 19px 0;
//     margin: 20px;
//     box-shadow: 0px 0px 10px gray;
//     border-radius: 35px;
// }
