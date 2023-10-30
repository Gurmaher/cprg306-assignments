"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({items})
{
  const[sortBy,setSortBy]=useState("name");
  const sortedItems = [...items].sort((a,b)=> a[sortBy].localeCompare(b[sortBy]));
      return(
        <div> 
        <div>
          <button onClick={()=>setSortBy('name') }  className={`py-2 px-2 mt-2 ml-4 ${sortBy == 'name' ? 'bg-green-600 hover:bg-yellow-600' : 'bg-yellow-600'} hover:bg-green-700 rounded-md text-black w-full max-w-xs`}>Name</button>
          <button onClick={()=>setSortBy('category')} className={`py-2 px-2 ml-4 mt-2 ${sortBy == 'category' ? 'bg-green-600 hover:bg-yellow-600 ': 'bg-yellow-600'} hover:bg-green-700 rounded-md text-black w-full max-w-xs`}>Category</button>
          {/* <button onClick={()=>setSortBy('grouped-category')} className={`py-2 px-2 ml-4 mt-2 ${sortBy == 'grouped-category'?'bg-green-600 hover:bg-yellow-600': 'bg-yellow-600'} hover:bg-green-700 rounded-md text-black w-full max-w-xs`}>Grouped Category</button> */}
        </div> 
        <div>
          {sortedItems.map((item)=>(<Item key={item.id} name={item.name} quantity={item.quantity} category={item.category}/>))}
        </div>
        </div>
      );
}