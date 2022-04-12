import React, { useEffect, useState } from "react";
import "./App.css";
import NewsResult from "./components/NewsResults/index";
import Scroll from "./components/scroll";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchField, setSearchField] = useState("");
  function onSearchChange(e) {
    setSearchField(e.target.value);
  }
  return (
    <div className="App">
      <Scroll>
        <SearchBox onSearchChange={onSearchChange} />
        <NewsResult />
      </Scroll>
    </div>
  );
}

export default App;
