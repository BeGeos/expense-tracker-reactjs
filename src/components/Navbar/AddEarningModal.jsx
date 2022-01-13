import React from "react";

// Components
import Backdrop from "../Generic/Backdrop";
import SelectChoice from "../Generic/SelectChoice";

const CURRENCIES = ["EUR", "USD", "AUD"];

function AddEarningForm() {
  return (
    <form className="add-expense__form">
      <div className="form__top">
        <label htmlFor="new-amount">Amount</label>
        <input type="text" name="new-amount" id="new-amount" />
        <label htmlFor="currency">Currency</label>
        <SelectChoice _name="currency" _id="currency" iterable={CURRENCIES} />
      </div>
      <div className="form__middle">
        <label htmlFor="new-date">Date</label>
        <input type="date" name="new-date" id="new-date" />
        <label htmlFor="new-category">Category</label>
        <input type="text" name="new-category" id="new-category" />
      </div>
      <div className="form__bottom">
        <label htmlFor="new-labels">Labels</label>
        <input type="text" name="new-labels" id="new-labels" />
        <label htmlFor="new-notes">Notes</label>
        <textarea name="new-notes" id="new-notes"></textarea>
      </div>
    </form>
  );
}

export default function AddEarningModal({ open, handleClick }) {
  if (!open) {
    return <></>;
  }

  return (
    <Backdrop>
      <div className="modal__add-expense">
        <div className="add-expense__header">
          <h2>Add Earning</h2>
          <span className="close__add-expense" onClick={handleClick}>
            &times;
          </span>
        </div>
        <AddEarningForm />
        <div className="form__cta">
          <span className="cta" onClick={handleClick}>
            Cancel
          </span>
          <span className="btn">Add</span>
        </div>
      </div>
    </Backdrop>
  );
}
