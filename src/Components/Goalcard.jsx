import React, { useState } from "react";

export default function GoalCard({ goal, onUpdate, onDelete }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(goal);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onUpdate(goal.id, formData);
    setEditing(false);
  };

  const now = new Date();
  const deadline = new Date(goal.deadline);
  const daysLeft = Math.ceil((deadline - now) / (1000 * 60 * 60 * 24));
  const complete = goal.savedAmount >= goal.targetAmount;
  const warning = daysLeft <= 30 && !complete;
  const overdue = daysLeft < 0 && !complete;
  const progress = Math.min(100, (goal.savedAmount / goal.targetAmount) * 100);

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white">
      {editing ? (
        <form onSubmit={handleSubmit} className="space-y-2">
          <input name="name" value={formData.name} onChange={handleChange} className="w-full p-1 border" />
          <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} className="w-full p-1 border" />
          <input name="category" value={formData.category} onChange={handleChange} className="w-full p-1 border" />
          <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} className="w-full p-1 border" />
          <button className="px-2 py-1 bg-blue-500 text-white rounded">Save</button>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{goal.name}</h2>
          <p>Category: {goal.category}</p>
          <p>Target: ${goal.targetAmount}</p>
          <p>Saved: ${goal.savedAmount}</p>
          <div className="w-full h-3 bg-gray-200 rounded overflow-hidden mt-2">
            <div style={{ width: `${progress}%` }} className="h-full bg-green-500"></div>
          </div>
          <p className="text-sm mt-1">{daysLeft} days left</p>
          {complete && <p className="text-green-600">Goal Completed </p>}
          {warning && !overdue && <p className="text-yellow-600">Deadline Soon </p>}
          {overdue && <p className="text-red-600">Overdue </p>}
          <div className="flex gap-2 mt-2">
            <button onClick={() => setEditing(true)} className="text-blue-500">Edit</button>
            <button onClick={() => onDelete(goal.id)} className="text-red-500">Delete</button>
          </div>
        </>
      )}
    </div>
  );
}