const API_URL = 'http://localhost:3000/goals'; 

export const getGoals = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data;
};

export const createGoal = async (newGoal) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newGoal),
  });
  const data = await response.json();
  return data;
};

export const updateGoal = async (id, updatedFields) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedFields),
  });
  const data = await response.json();
  return data;
};

export const deleteGoalById = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
};

export const depositToGoal = async (id, amount) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      savedAmount: amount, 
    }),
  });
  const data = await response.json();
  return data;
};
