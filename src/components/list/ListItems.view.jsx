import React from "react";
import { ListItem } from "./ListItem.view";

const ListItems = ({ items, setStoredItems }) => {
  if (!items) {
    return "no items stored";
  }

  return Object.keys(items).map((key) => {
    const handleOnChange = (checked) => {
      const saveItems = {
        ...items,
        [key]: checked,
      };
      localStorage.setItem("list-items", JSON.stringify(saveItems));
    };
    return (
      <ListItem
        item={{ key, value: items[key] }}
        onChange={handleOnChange}
        setStoredItems={setStoredItems}
      />
    );
  });
};

export { ListItems };
