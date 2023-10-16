"use client";
import React, { useState } from "react";
import Item from "./item";
import items from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState("name");
  const [groupedByCategory, setGroupedByCategory] = useState(false);

  const groupAndSortItems = () => {
    const sortedItems = [...items];
    sortedItems.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });

    if (groupedByCategory) {
      const grouped = sortedItems.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {});

      const sortedCategories = Object.keys(grouped).sort();

      for (const category in grouped) {
        grouped[category].sort((a, b) => a.name.localeCompare(b.name));
      }

      return { grouped, sortedCategories };
    }

    return { sortedItems };
  };

  const { grouped, sortedCategories, sortedItems } = groupAndSortItems();

  const handleSortByName = () => {
    setSortBy("name");
  };

  const handleSortByCategory = () => {
    setSortBy("category");
  };

  const handleToggleGroupByCategory = () => {
    setGroupedByCategory(!groupedByCategory);
  };

  return (
    <div className="mx-auto max-w-xl p-4">
      <div className="mb-4">
        <button
          onClick={handleSortByName}
          className={`px-4 py-2 rounded-md ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={handleSortByCategory}
          className={`ml-2 px-4 py-2 rounded-md ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
        <button
          onClick={handleToggleGroupByCategory}
          className={`ml-2 px-4 py-2 rounded-md ${
            groupedByCategory ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Group by Category
        </button>
      </div>

      <ul>
        {groupedByCategory
          ? sortedCategories.map((category) => (
              <li key={category} className="mb-4">
                <h2 className="text-xl font-semibold capitalize mb-2">
                  {category}
                </h2>
                <ul>
                  {grouped[category].map((item) => (
                    <Item
                      key={item.id}
                      name={item.name}
                      quantity={item.quantity}
                      category={item.category}
                    />
                  ))}
                </ul>
              </li>
            ))
          : sortedItems.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))}
      </ul>
    </div>
  );
};

export default ItemList;
