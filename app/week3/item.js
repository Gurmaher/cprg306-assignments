import React from "react"
const { list } = require("postcss")

const Item = ({ name, quantity, category}) => {
    return (
        <li className="bg-white shadow-md p-4 rounded-lg mb-4">
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-500">Category: {category}</div>
        <div className="text-gray-500">Quantity: {quantity}</div>
        </li>
    )
}