import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import { FaSearch } from "react-icons/fa";

// Use import.meta.env for environment variables
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tagFilter, setTagFilter] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/product`);
      if (Array.isArray(res.data)) {
        setProducts(res.data);
        // Extract unique tags from the fetched products
        const uniqueTags = Array.from(
          new Set(res.data.map((product) => product.tag).filter(Boolean))
        );
        setTags(uniqueTags);
      } else {
        console.error("API response is not an array:", res.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleLike = async (_id) => {
    try {
      const response = await axios.patch(`${backendUrl}/api/product/${_id}/like`);
      setProducts(
        products.map((product) => {
          if (product._id === _id) {
            return {
              ...product,
              likes: response.data.likes,
            };
          }
          return product;
        })
      );
    } catch (error) {
      console.error("Error liking product:", error);
      alert("Failed to like the product. Please try again.");
    }
  };

  const handleInputChange = (e, _id) => {
    const { value } = e.target;
    setProducts(
      products.map((product) => {
        if (product._id === _id) {
          return {
            ...product,
            bidPrice: value,
          };
        }
        return product;
      })
    );
  };

  const handleBid = async (_id) => {
    const product = products.find((product) => product._id === _id);
    const newPrice = parseFloat(product.bidPrice);
    if (!isNaN(newPrice) && newPrice > product.newPrice) {
      try {
        await axios.patch(`${backendUrl}/api/product/${_id}`, {
          newPrice,
        });
        setProducts(
          products.map((p) => {
            if (p._id === _id) {
              return {
                ...p,
                newPrice,
                bidPrice: "",
              };
            }
            return p;
          })
        );
      } catch (error) {
        console.error("Error updating product price:", error);
        alert("Failed to update the product price. Please try again.");
      }
    } else {
      alert("Please enter a price higher than the current new price.");
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleTagClick = (tag) => {
    setTagFilter(tag.toLowerCase());
  };

  const handleClearTagFilter = () => {
    setTagFilter("");
  };

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm) &&
      (tagFilter === "" || product.tag.toLowerCase() === tagFilter)
  );

  const handleClick = async (_id) => {
    try {
      await axios.delete(`${backendUrl}/api/product/${_id}`);
      fetchProducts(); // Refresh the product list
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete the product. Please try again.");
    }
  };

  const handleAddProduct = () => {
    fetchProducts(); // Refresh the product list
  };

  return (
    <div>
      <div className="full-height">
        {/* filter tags */}
        <div className="tag-menu">
          <button className="tag-menu-btn" onClick={handleClearTagFilter}>
            All Tags
          </button>
          {tags.map((tag, index) => (
            <button
              key={index}
              onClick={() => handleTagClick(tag)}
              className="tag-menu-btn"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* search box */}
        <section>
          <FaSearch className="search-icon" />
          <input
            className="search-box"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search product"
          />
        </section>
      </div>

      <section className="wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-list" key={product._id}>
              <img className="product-img" src={product.image} alt="product" />

              <div className="card-body">
                <h3>
                  {product.name}
                  <button
                    onClick={() => handleLike(product._id)}
                    className="like-btn"
                  >
                    <FcLike /> {product.likes}
                  </button>
                </h3>
                <span
                  className="material-symbols-outlined"
                  onClick={() => handleClick(product._id)}
                >
                  delete
                </span>
                <p>Initial price: CA$ {product.initialPrice}</p>
                <p className="new-price">Current Price: ${product.newPrice}</p>
                <p>Description: {product.description}</p>
                <p>Tags: {product.tag}</p>

                <input
                  type="Number"
                  value={product.bidPrice || ""}
                  onChange={(e) => handleInputChange(e, product._id)}
                  placeholder="Enter price CA$"
                  className="bid-input"
                />
                <button
                  onClick={() => handleBid(product._id)}
                  className="bid-btn"
                >
                  Place Bid
                </button>
                <br />
              </div>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </section>
      <footer>
        <p>©2024 Infinity ACJN CO. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;
