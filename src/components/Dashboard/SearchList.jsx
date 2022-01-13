import React from "react";

// Components
import SelectChoice from "../Generic/SelectChoice";

const MONTH = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const YEARS = [2022, 2021, 2020];

export default function SearchList() {
  return (
    <div className="search__list">
      <input type="text" placeholder="Search..." />
      <div className="search__selection">
        <span className="btn">All</span>
        <SelectChoice iterable={YEARS} _name="years" _id="years" />
        <SelectChoice iterable={MONTH} _name="months" _id="months" />
      </div>
    </div>
  );
}
