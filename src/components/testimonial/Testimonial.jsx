import React from "react";
import "./Testimonial.css";
import { FaStar } from "react-icons/fa";
import testimonialImg from "../../../public/images/home/testimonials/testimonials.png";
import testimonialImg1 from "../../../public/images/home/testimonials/testimonial1.png";
import testimonialImg2 from "../../../public/images/home/testimonials/testimonial2.png";
import testimonialImg3 from "../../../public/images/home/testimonials/testimonial3.png";

const Testimonial = () => {
  return (
    <div className="container-md">
      <div className="row py-5 d-flex flex-column flex-md-row">
        <div className="left py-5 py-md-0 col-md-6 d-flex flex-column justify-content-center">
          <img src={testimonialImg} alt="" />
        </div>

        <div className="right py-5 py-md-0 col-md-6 d-flex flex-column justify-content-center">
          <h6 className="text-danger fw-bold ">TESTIMONIALS</h6>
          <h1 className="fw-bolder mt-4 mb-5 mb-md-3">
            What Our Customers <br /> Say About Us
          </h1>
          <p className="fs-5">
            “I had the pleasure of dining at Foodi last night, and I'm still
            raving about the experience! The attention to detail in presentation
            and service was impeccable”
          </p>
          <div className="feedback d-flex position-relative  mt-3 mt-md-2">
            <div className="d-flex position-relative">
              <img
                className="img1 rounded-circle p-1 bg-danger position-absolute "
                src={testimonialImg1}
                alt=""
              />
              <img
                className="img2 rounded-circle p-1 bg-danger position-absolute start-1"
                src={testimonialImg2}
                alt=""
              />
              <img
                className="img3 rounded-circle p-1 bg-danger position-absolute "
                src={testimonialImg3}
                alt=""
              />
            </div>
            <div className="feedback-detail ">
              <h6 className="fw-bold">Customer Feedback</h6>
              <div className="d-inline-block ">
                <FaStar className="fs-5 text-warning" />
                <span className="fw-bold mx-2">4.9</span>
                <span className="text-secondary">(18.8k Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
