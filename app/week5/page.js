import React from "react";
import ItemList from "./item-list";
 // Import Link from Next.js

const page = () => {
  return (
    <main className="">
      <h1 className="text-2xl font-semibold">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default page;


