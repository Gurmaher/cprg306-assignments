import React, { useState } from "react";

export default function NewItem({ onAddItem }) { // Added the onAddItem prop
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState(1);
  const [itemCategory, setItemCategory] = useState("produce");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: itemName,
      quantity: itemQuantity,
      category: itemCategory,
    };

    // Replace the alert functionality by calling the onAddItem prop
    if (onAddItem) {
      onAddItem(formData);
    }

    // Reset form fields to initial state
    setItemName("");
    setItemQuantity(1);
    setItemCategory("produce");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold absolute top-0 mt-10">Add Items</h1>
      <div className="bg-slate-600 w-full max-w-md p-10 rounded-xl hover:bg-slate-700">
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="itemName">
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(event) => setItemName(event.target.value)}
              placeholder="Enter item name"
              required
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="itemQuantity">
              Quantity
            </label>
            <input
              type="number"
              id="itemQuantity"
              min="1"
              max="99"
              value={itemQuantity}
              onChange={(event) =>
                setItemQuantity(Number(event.target.value))
              }
              placeholder="Enter quantity"
              required
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="itemCategory">
              Category
            </label>
            <select
              id="itemCategory"
              value={itemCategory}
              onChange={(event) => setItemCategory(event.target.value)}
              required
              className="input-field"
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="household">Household</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-600 hover:bg-green-700 rounded-md text-white font-bold text-lg"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

