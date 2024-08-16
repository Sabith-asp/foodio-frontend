import "./Navbar.css";
import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { BiPhoneCall } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-md bg-body-tertiary align-center px-lg-5 px-1 py-3 fw-semibold">
      <div class="container-fluid d-flex justify-content-between ">
        <a class="navbar-brand fs-4 fw-bold" href="#">
          Foodio
        </a>
        <button
          class="navbar-toggler border-0 p-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5
              class="offcanvas-title w-100 p-3 rounded"
              id="offcanvasNavbarLabel"
            >
              Foodio
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body align-items-center justify-content-center">
            <ul class="navbar-nav justify-content-center flex-grow-1 align-items-lg-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href=""
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/Menu">
                      All
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Salad
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="#">
                      Pizza
                    </a>
                  </li>
                </ul>
              </li>
              <div class="dropdown mx-lg-2">
                <a
                  class="dropdown-toggle text-secondary my-2"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
            </ul>
            <div className="nav-end d-flex fs-4 align-items-center justify-content-around">
              <IoMdSearch className="m-2" />
              <FiShoppingBag className="m-2" />
              <button className="btn btn-success d-flex align-items-center rounded-pill ms-3 fw-semibold">
                <BiPhoneCall className="m-1 me-2 " />
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
