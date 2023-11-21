"use client";
import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleItemSelect(itemName) {
        const cleanedName = itemName.split(",")[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
        setSelectedItemName(cleanedName);
    }

    return (
        <main>
            <h1 className="text-3xl font-bold text-center">Shopping List</h1>
            <div className="flex">
                <ItemList onItemSelect={handleItemSelect} />
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}
