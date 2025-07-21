import React, { useState } from "react";
import Goalform from "./GoalForm";

export default function DepositForm({ goals, onDeposit }) {
  const [selectedId, setSelectedId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!selectedId || !amount) return;
    onDeposit(selectedId, parseFloat(amount));
    setSelectedId("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <h2 className="text-lg font-bold">Make a Deposit</h2>
      <select value={selectedId} onChange={e => setSelectedId(e.target.value)} className="w-full p-1 border">
        <option value="">Select Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount" className="w-full p-1 border" />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Deposit</button>
    </form>
  );
}

