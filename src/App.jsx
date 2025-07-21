import React, { useState, useEffect } from "react";
import GoalList from "./Components/GoalList";
import GoalForm from "./Components/GoalForm";
import DepositForm from "./Components/Deposit";
import OverviewPanel from "./Components/Overviewpanel";
import { getGoals, createGoal, updateGoal, deleteGoalById, depositToGoal } from "./assets/api";

export default function App() {
  const [goals, setGoals] = useState([]);

  useEffect(() => {
    getGoals().then(setGoals);
  }, []);

  const handleAddGoal = async (newGoal) => {
    const added = await createGoal(newGoal);
    setGoals([...goals, added]);
  };

  const handleUpdateGoal = async (id, updatedFields) => {
    const updated = await updateGoal(id, updatedFields);
    setGoals(goals.map(g => g.id === id ? updated : g));
  };

  const handleDeleteGoal = async (id) => {
    await deleteGoalById(id);
    setGoals(goals.filter(g => g.id !== id));
  };

  const handleDeposit = async (id, amount) => {
    const updated = await depositToGoal(id, amount);
    setGoals(goals.map(g => g.id === id ? updated : g));
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Smart Goal Planner</h1>
      <OverviewPanel goals={goals} />
      <GoalForm onAddGoal={handleAddGoal} />
      <DepositForm goals={goals} onDeposit={handleDeposit} />
      <GoalList goals={goals} onUpdate={handleUpdateGoal} onDelete={handleDeleteGoal} />
    </div>
  );
} 