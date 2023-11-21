export default function Item({ name, quantity, category, onSelect }) {
    return (
        <div className="bg-gray-500 w-full max-w-xs m-4 p-2 rounded hover:scale-105 duration-75" onClick={() => onSelect(name)}>
            <li className="list-none">
                <p className="font-semibold text-lg text-yellow-400">{name}</p>
                <p>Buy {quantity} in {category}</p>
            </li>
        </div>
    );
}
