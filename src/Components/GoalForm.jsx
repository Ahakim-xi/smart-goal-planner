import React, { useState } from "react";

export default function GoalForm({ onAddGoal }) {
  const [formData, setFormData] = useState({
    name: "",
    targetAmount: "",
    savedAmount: 0,
    category: "",
    deadline: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddGoal(formData);
    setFormData({ name: "", targetAmount: "", savedAmount: 0, category: "", deadline: "", createdAt: new Date().toISOString().split("T")[0] });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <h2 className="text-lg font-bold">Add New Goal</h2>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full p-1 border" />
      <input name="targetAmount" type="number" value={formData.targetAmount} onChange={handleChange} placeholder="Target Amount" className="w-full p-1 border" />
      <input name="category" value={formData.category} onChange={handleChange} placeholder="Category" className="w-full p-1 border" />
      <input name="deadline" type="date" value={formData.deadline} onChange={handleChange} className="w-full p-1 border" />
      <button className="px-4 py-2 bg-green-600 text-white rounded">Add Goal</button>
    </form>
  );
}