import React, { useState } from "react";
export default function SearchBox({ searchField, onSearchChange }) {
  return (
    <div className="pa3 tc">
      <input
        type="search"
        placeholder="Search here"
        className="bg-pink pa2 white"
        onChange={(e) => onSearchChange(e)}
      ></input>
    </div>
  );
}
