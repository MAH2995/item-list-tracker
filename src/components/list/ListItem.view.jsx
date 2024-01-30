import { useState, useEffect } from "react";

const ListItem = ({ item, onChange, setStoredItems }) => {
  const [checked, setChecked] = useState(item.value);

  useEffect(() => {
    setStoredItems(JSON.parse(localStorage.getItem("list-items")));
  }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => {
          setChecked(!checked);
          onChange(e.target.checked);
        }}
      />
      <label>{item.key}</label>
    </div>
  );
};

export { ListItem };
