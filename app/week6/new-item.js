"use client";

import { useState } from "react";

export default function NewItem({ onAddItem}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      name,
      quantity,
      category,
    };
    onAddItem(item);
    console.log(item);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold absolute top-0 mt-10">Add-Items</h1>
      <div className="bg-slate-600 w-full max-w-md p-10 rounded-xl hover:bg-slate-700">
        <form onSubmit={handleSubmit}>
          <label className="block mb-5">
            <input
              onChange={(event) => {
                setName(event.target.value);
              }}
              value={name}
              placeholder="Item Name" required
              className="mt-1 p-3 block w-full rounded-md text-black bg-gray-200 border-transparent text-center text-md  focus:bg-white focus:ring-0 hover:scale-105 duration-75 "
            ></input>
          </label>
          <label className="block mb-5">
            <input
              required
              onChange={(event) => {
                setQuantity(Number(event.target.value));
              }}
              value={quantity}
              type="number"
              min="1"
              max="99"
              className="mt-1 p-3 block w-full rounded-md text-black bg-gray-200 border-transparent text-center text-md  focus:bg-white focus:ring-0 hover:scale-105 duration-75"
            ></input>
          </label>
          <label className="block mb-5">
            <select
              required
              onChange={(event) => {
                setCategory(event.target.value);
              }}
              value={category}
              className="mt-1 p-3 block w-full rounded-md text-black bg-gray-200 border-transparent text-center text-md  focus:bg-white focus:ring-0 hover:scale-105 duration-75"
            >
              <option value="Category" disabled>Category</option>
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen foods">Frozen Foods</option>
              <option value="canned goods">Canned Goods</option>
              <option value="dry goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
          <button type="submit" className="w-full py-2 px-4 bg-yellow-600 hover:bg-green-700 rounded-md text-black">+</button>
        </form>
      </div>
    </div>
  );
}