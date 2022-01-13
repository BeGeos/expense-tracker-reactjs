import React from "react";

const MONTHS = [
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

const PERIODS = [2021, 2020, 2019];

export default function Timeline() {
  return (
    <div className="timeline">
      {PERIODS.map((y) => (
        <a href={`#${y}`}>
          <div className="timeline__year" key={y}>
            {y}
          </div>
        </a>
      ))}
    </div>
  );
}
