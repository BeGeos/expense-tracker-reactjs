import React from "react";

export default function SavingsForm() {
  return (
    <form className="savings__form">
      <h3>Add New Vault</h3>
      <label htmlFor="new-saving-amount">Amount</label>
      <input type="text" id="new-saving-amount" />
      <label htmlFor="new-saving-title">Title</label>
      <input type="text" id="new-saving-title" />
      <label htmlFor="new-saving-deadline">Deadline</label>
      <input type="date" id="new-saving-deadline" />
      <label htmlFor="new-saving-notes">Inspiration</label>
      <input type="text" id="new-saving-notes" maxLength={200} />
      <span className="btn">Add</span>
    </form>
  );
}
