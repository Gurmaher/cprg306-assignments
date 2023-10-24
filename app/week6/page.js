'use client';
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  function handleAddItem(item)
  {
      setItems([...items,item]);
  
  }
  return (
    <div>
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />    
        </main>
    </div>
  );
}
