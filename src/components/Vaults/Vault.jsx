import React, { useRef } from "react";

export default function Vault({ data }) {
  const vaultActions = useRef();

  return (
    <div className="vault">
      <div className="vault__header">
        <h3>Trip to Thailand 🛫</h3>
        <span onClick={() => vaultActions.current.classList.toggle("open")}>
          open
        </span>
      </div>
      <div className="vault__progress"></div>
      <div className="vault__details">
        <span>
          <span>
            <span className="vault__amount">800</span>$ /
            <span className="vault__goal"> 1200</span>
          </span>
          <span> $</span>
        </span>
        <span>Deadline: 12/08/2021</span>
      </div>
      <div className="vault__actions" ref={vaultActions}>
        <div>Delete</div>
        <div>Details</div>
      </div>
    </div>
  );
}
