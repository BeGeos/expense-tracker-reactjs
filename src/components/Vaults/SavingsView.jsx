import React from "react";

// Components
import SavingsForm from "./SavingsForm";
import Vault from "./Vault";
import Savings from "./Savings";

const labelTest = {
  content: "testLabel",
  color: "blue",
};

export default function SavingsView() {
  return (
    <div className="dashboard__goals">
      <h2>Savings</h2>
      <div className="vaults__headline">
        <SavingsForm />
        <Savings />
      </div>
      <h2>Current Vaults</h2>
      <div className="vaults__grid">
        <Vault />
        <Vault />
        <Vault />
      </div>
    </div>
  );
}
