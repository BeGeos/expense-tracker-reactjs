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
      <MenuItem title="Earnings">
        <Link to="/">
          <li>Overview</li>
        </Link>
      </MenuItem>
      <MenuItem title="Expenses">
        <Link to="/">
          <li>Overview</li>
        </Link>
      </MenuItem>
      <MenuItem title="Savings">
        <Link to="/vaults/savings">
          <li>Overview</li>
        </Link>
        <Link to="/vaults/savings">
          <li>Vaults</li>
        </Link>
        <Link to="/vaults/budget">
          <li>Budgets</li>
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
      <MenuItem title="Payments">
        <Link to="/">
          <li>Invoices</li>
        </Link>
        <Link to="/">
          <li>Bills</li>
        </Link>
      </MenuItem>
    </div>
  );
}
