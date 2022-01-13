import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ children, title }) {
  return (
    <div className="menu__item">
      <h4 className="menu__title">{title}</h4>
      <ul className="menu__sub">{children}</ul>
    </div>
  );
}

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Options</h2>
      <MenuItem title="Earnings">
        <Link to="/">
          <li>Monthly</li>
        </Link>
        <Link to="/">
          <li>Yearly</li>
        </Link>
      </MenuItem>
      <MenuItem title="Expenses">
        <Link to="/">
          <li>All</li>
        </Link>
      </MenuItem>
      <MenuItem title="Vaults">
        <Link to="/vaults/savings">
          <li>Savings</li>
        </Link>
        <Link to="/vaults/budget">
          <li>Budget</li>
        </Link>
      </MenuItem>
      <MenuItem title="Analytics">
        <Link to="/">
          <li>Charts</li>
        </Link>
        <Link to="/">
          <li>Compare</li>
        </Link>
      </MenuItem>
      <MenuItem title="Category">
        <Link to="/">
          <li>Clothes</li>
        </Link>
        <Link to="/">
          <li>Food</li>
        </Link>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/">
          <li>Business</li>
        </Link>
      </MenuItem>
    </div>
  );
}
