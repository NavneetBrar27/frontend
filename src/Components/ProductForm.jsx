import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Use import.meta.env for environment variables
const backendUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

const ProductForm = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [initialPrice, setInitialPrice] = useState("");
  const [newPrice, setNewPrice] = useState(initialPrice);
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const navigate = useNavigate();

  const tags = ["Accessories", "Footwear", "Clothing"];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Manual validation for empty fields
    const fieldsToValidate = { name, image, initialPrice, description, tag };
    const emptyFields = Object.keys(fieldsToValidate).filter(
      (key) => !fieldsToValidate[key]
    );

    if (emptyFields.length > 0) {
      setError("Please fill in all required fields.");
      setEmptyFields(emptyFields);
      return;
    }

    const product = { name, image, initialPrice, newPrice, description, tag };
    try {
      const response = await axios.post(`${backendUrl}/api/product`, product, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      // If the request is successful
      setName("");
      setImage("");
      setInitialPrice("");
      setNewPrice("");
      setDescription("");
      setTag("");
      setError(null);
      setEmptyFields([]);

      alert("Product Added, return to Product page");
      navigate("/products"); // Navigate to the products page

      console.log("New product added", response.data);
    } catch (error) {
      setError(error.message);
      // Handle errors
      if (error.response) {
        // Server responded with a status other than 2xx
        setError("Please enter all fields");
        setEmptyFields(error.response.data.emptyFields || []);
        console.log(emptyFields);
      } else {
        // Network or other error
        setError("Network Error");
      }
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Product</h3>

      <label>*Product title:</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes("name") ? "error" : ""}
      />

      <label>*Image URL:</label>
      <input
        type="text"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        className={emptyFields.includes("image") ? "error" : ""}
      />

      <label>*Price:</label>
      <input
        type="number"
        onChange={(e) => setInitialPrice(e.target.value)}
        value={initialPrice}
        className={emptyFields.includes("initialPrice") ? "error" : ""}
      />

      <label>New Price:</label>
      <input
        type="number"
        onChange={(e) => setNewPrice(e.target.value)}
        value={newPrice}
        className={emptyFields.includes("newPrice") ? "error" : ""}
      />

      <label>*Descriptions:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes("description") ? "error" : ""}
      />

      <label>*Tag:</label>
      <select
        onChange={(e) => setTag(e.target.value)}
        value={tag}
        className={emptyFields.includes("tag") ? "error" : ""}
      >
        <option value="">Select a tag</option>
        {tags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      <button className="addProduct-btn">Add Product</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default ProductForm;
