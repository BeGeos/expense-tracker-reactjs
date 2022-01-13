import React, { useState } from "react";

// Components
import AddExpenseModal from "./AddExpenseModal";
import AddEarningModal from "./AddEarningModal";

export default function Navbar() {
  const [openAddExpense, setOpenAddExpense] = useState(false);
  const [openAddEarning, setOpenAddEarning] = useState(false);

  const addExpenseModalClick = () => {
    setOpenAddExpense(!openAddExpense);
  };

  const addEarningModalClick = () => {
    setOpenAddEarning(!openAddEarning);
  };

  return (
    <header>
      <AddExpenseModal
        open={openAddExpense}
        handleClick={addExpenseModalClick}
      />
      <AddEarningModal
        open={openAddEarning}
        handleClick={addEarningModalClick}
      />
      <nav className="navbar">
        <h2 className="logo">Expense Tracker</h2>
        <li className="add__action" onClick={addEarningModalClick}>
          Add Earning
        </li>
        <li className="add__action" onClick={addExpenseModalClick}>
          Add Expense
        </li>
        <li className="btn">Import CSV</li>
      </nav>
    </header>
  );
}
