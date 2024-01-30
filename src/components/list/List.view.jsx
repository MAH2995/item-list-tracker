import React, { useEffect, useState } from "react";
import { ListItems } from "./ListItems.view";

const List = () => {
  const [listItemInput, setListItemInput] = useState("");
  const [storedItems, setStoredItems] = useState(
    JSON.parse(localStorage.getItem("list-items"))
  );

  const handleOnChange = (e) => {
    setListItemInput(e.target.value);
  };

  const handleOnClick = () => {
    if (listItemInput) {
      localStorage.setItem(
        "list-items",
        JSON.stringify({
          ...storedItems,
          [listItemInput]: false,
        })
      );
    }
    setListItemInput("");
  };

  useEffect(() => {
    setStoredItems(JSON.parse(localStorage.getItem("list-items")));
  }, [listItemInput]);

  return (
    <div className="list-wrapper">
      <div className="list">
        <ListItems items={storedItems} setStoredItems={setStoredItems} />
      </div>
      <div className="new-item-input-wrapper">
        <input
          className="input"
          type="text"
          value={listItemInput}
          onChange={handleOnChange}
        />
        <button className="button" onClick={handleOnClick}>
          Submit
        </button>
      </div>
    </div>
  );
};

export { List };
