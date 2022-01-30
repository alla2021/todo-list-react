import React from "react";
import "./selectfilter.scss";

const SelectFilter = ({ setStatus }) => {
  const statusHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="select">
      <select name="todos" className="filter-todo" onChange={statusHandler}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </div>
  );
};

export default SelectFilter;
