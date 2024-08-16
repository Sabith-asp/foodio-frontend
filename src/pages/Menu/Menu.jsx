import React, { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import "./Menu.css";
import { FaFilter } from "react-icons/fa";
const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        // console.log(data);
        setMenu(data);
        setFilteredItems(data);
        console.log(data);
      } catch (error) {
        console.error("Error in fetching data", error);
      }
    };
    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = (category) => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low to high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high to low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        // code block
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container-md">
      <div className="p-2 p-md-5 m-2 m-md-5 d-flex flex-column align-items-center">
        <h1 className="fw-bold">Dive into Delights Of Delectable Food</h1>
        <h6 className="m-3 m-md-5">
          Where Each Plate Weaves a Story of Culinary Mastery and Passionate
          Craftsmanship
        </h6>
        <button className="btn rounded-pill border-0 bg-success text-white px-4 py-3">
          Order Now
        </button>
      </div>
      <div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="d-flex">
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "all" ? "active" : ""
              }`}
              onClick={showAll}
            >
              All
            </button>
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "salad" ? "active" : ""
              }`}
              onClick={() => filterItems("salad")}
            >
              Salad
            </button>
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "drinks" ? "active" : ""
              }`}
              onClick={() => filterItems("drinks")}
            >
              Drinks
            </button>
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "dessert" ? "active" : ""
              }`}
              onClick={() => filterItems("dessert")}
            >
              Dessert
            </button>
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "pizza" ? "active" : ""
              }`}
              onClick={() => filterItems("pizza")}
            >
              Pizza
            </button>
            <button
              className={`border-0 bg-transparent fs-6 fs-md-5 ${
                selectedCategory === "soup" ? "active" : ""
              }`}
              onClick={() => filterItems("soup")}
            >
              Soup
            </button>
          </div>
          <div>
            <div className="bg-black d-flex align-items-center p-1 px-3 rounded-pill mt-3">
              <FaFilter className="text-white" />
              <select
                name="sort"
                id="sort"
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className="bg-black border-0 text-white"
              >
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low to high">low to high</option>
                <option value="high to low">high to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="menu-card d-flex justify-content-center justify-content-lg-between flex-wrap">
          {currentItems.map((item) => (
            <Card key={item._id} popItems={item} />
          ))}
        </div>
        <div className="d-flex justify-content-center">
          {Array.from({
            length: Math.ceil(filteredItems.length / itemsPerPage),
          }).map((_, index) => (
            <button
              className={`btn mx-2 rounded-circle text-white ${
                currentPage === index + 1 ? "bg-success " : "bg-secondary"
              }`}
              key={index + 1}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button>flooooo</button>
        <button>flooooo</button>
        <button>flooooo</button>
        <button>flooooo</button>
      </div>
    </div>
  );
};

export default Menu;
