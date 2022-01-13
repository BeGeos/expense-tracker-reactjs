import React from "react";
import { useParams } from "react-router-dom";

// Components
import SavingsView from "./SavingsView";
import BudgetView from "./BudgetView";
import NotFound from "../NotFound";

export default function Vaults() {
  const { item } = useParams();

  switch (item) {
    case "savings":
      return <SavingsView />;
    case "budget":
      return <BudgetView />;
    default:
      return <NotFound />;
  }
}
