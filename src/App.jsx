import React from "react";
import "./App.css";
import { Title } from "./components/title/Title.view";
import { List } from "./components/list/List.view";

function App() {
  return (
    <React.Fragment>
      <Title />
      <List />
    </React.Fragment>
  );
}

export default App;
