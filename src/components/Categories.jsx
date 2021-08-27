import React, { useState } from "react";

function Categories({ items }) {
  const [activeItem, setActiveItem] = useState(0);

  const onItemSelect = (idx) => {
    setActiveItem(idx);
  };

  return (
    <div className="categories">
      <ul>
        <li
          onClick={() => onItemSelect(null)}
          className={activeItem === null ? "active" : ""}
        >
          Все
        </li>
        {items &&
          items.map((itemName, idx) => (
            <li
              onClick={() => onItemSelect(idx)}
              key={`${itemName}_${idx}`}
              className={activeItem === idx ? "active" : ""}
            >
              {itemName}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
