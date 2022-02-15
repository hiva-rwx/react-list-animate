import React, { createRef, useState } from "react";
import Animate from "./components/Animate";
import "./app.css";
import Item from "./components/Item";
import { data } from "./data/items";
const App = () => {
  const [state, setState] = useState(data);

  const sortdata = () => {
    const copy = [...state];
    const filter = copy.filter((item) => item.num > 10);
    setState(filter);
  };

  const reverseData = () => {
    const copy = [...state];
    const reverse = copy.reverse();
    setState(reverse);
  };

  const normal = () => {
    setState(data);
  };
  return (
    <div className="container">
      <div className="sort-list">
        <div className="header">
          <button onClick={sortdata}>filter</button>
          <button onClick={reverseData}>sort - reverse</button>
          <button onClick={normal}>normal</button>
        </div>
        <Animate>
          {state.map((item) => {
            return <Item key={item.id} item={item} ref={createRef()} />;
          })}
        </Animate>
      </div>
    </div>
  );
};

export default App;
