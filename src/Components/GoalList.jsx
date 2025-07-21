import React from "react";
import GoalCard from "./Goalcard";

export default function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {goals.map(goal => (
        <GoalCard key={goal.id} goal={goal} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </div>
  );
}