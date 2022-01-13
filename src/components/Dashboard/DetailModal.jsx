import React from "react";

// Components
import Backdrop from "../Generic/Backdrop";

function Details({ details }) {
  return (
    <>
      <div className="details__top">
        <div>
          <h4>Amount</h4>
          <p>{details.amount}</p>
        </div>
        <div>
          <h4>Date</h4>
          <p>{details.date}</p>
        </div>
        <div>
          <h4>Category</h4>
          <p>{details.category}</p>
        </div>
      </div>
      <div className="details__middle">
        <h4>Labels</h4>
        <div className="details__labels">
          <span className="label">H&M</span>
          <span className="label">pants</span>
          <span className="label">gift</span>
        </div>
      </div>
      <div className="details__bottom">
        <h4>Notes</h4>
        <p>Lorem ipsum dolor si</p>
      </div>
    </>
  );
}

export default function DetailModal({ open, handleClick, data }) {
  if (!open) {
    return <></>;
  }

  return (
    <Backdrop>
      <div className="modal__details">
        <div className="details__header">
          <h2>Details</h2>
          <span className="close__details" onClick={handleClick}>
            &times;
          </span>
        </div>
        <Details details={data} />
      </div>
    </Backdrop>
  );
}
