import React from "react";
import { useDispatch } from "react-redux";
import { search } from "../redux/notes";

const SearchComponent = () => {
  const dispatch = useDispatch();
  return (
    <div id="searchelement">
      <input
        id="searchfield"
        type="text"
        placeholder="Search Notes"
        onChange={(e) => {
          dispatch(search(e.target.value));
        }}
      ></input>
    </div>
  );
};

export default SearchComponent;
