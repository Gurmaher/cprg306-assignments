import React from 'react';
import Item from './item.js'; 

const Page = () => {
    const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };
   
  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
   
  const item3 = {
    name: "eggs, dozen 🥚",
    quantity: 2,
    category: "dairy",
  };
   
  const item4 = {
    name: "bananas 🍌",
    quantity: 6,
    category: "produce",
  };
   
  const item5 = {
    name: "broccoli 🥦",
    quantity: 3,
    category: "produce",
  };
   
  const item6 = {
    name: "chicken breasts, 1 kg 🍗",
    quantity: 1,
    category: "meat",
  };
   
  const item7 = {
    name: "pasta sauce 🍝",
    quantity: 3,
    category: "canned goods",
  };
   
  const item8 = {
    name: "spaghetti, 454 g 🍝",
    quantity: 2,
    category: "dry goods",
  };
   
  const item9 = {
    name: "toilet paper, 12 pack 🧻",
    quantity: 1,
    category: "household",
  };
   
  const item10 = {
    name: "paper towels, 6 pack",
    quantity: 1,
    category: "household",
  };
   
  const item11 = {
    name: "dish soap 🍽️",
    quantity: 1,
    category: "household",
  };
   
  const item12 = {
    name: "hand soap 🧼",
    quantity: 4,
    category: "household",
  };

  return (
    <div className="container mx-auto p-4">
      <ul>
        <li><Item name={item1.name} quantity={item1.quantity} category={item1.category} /></li>
        <li><Item name={item2.name} quantity={item2.quantity} category={item2.category} /></li>
        <li><Item name={item3.name} quantity={item3.quantity} category={item3.category} /></li>
        <li><Item name={item4.name} quantity={item4.quantity} category={item4.category} /></li>
        <li><Item name={item5.name} quantity={item5.quantity} category={item5.category} /></li>
        <li><Item name={item6.name} quantity={item6.quantity} category={item6.category} /></li>
        <li><Item name={item7.name} quantity={item7.quantity} category={item7.category} /></li>
        <li><Item name={item8.name} quantity={item8.quantity} category={item8.category} /></li>
        <li><Item name={item9.name} quantity={item9.quantity} category={item9.category} /></li>
        <li><Item name={item10.name} quantity={item10.quantity} category={item10.category} /></li>
        <li><Item name={item11.name} quantity={item11.quantity} category={item11.category} /></li>
        <li><Item name={item12.name} quantity={item12.quantity} category={item12.category} /></li>

      </ul>
    </div>
  );
}
export default Page;
