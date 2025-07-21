import React from "react";

export default function OverviewPanel({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + g.savedAmount, 0);
  const completedGoals = goals.filter(g => g.savedAmount >= g.targetAmount).length;

  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold">Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Saved: ${totalSaved.toLocaleString()}</p>
      <p>Goals Completed: {completedGoals}</p>
    </div>
  );
}