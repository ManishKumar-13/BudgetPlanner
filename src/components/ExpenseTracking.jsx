// components/ExpenseTracking.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const ExpenseTracking = () => {
  const { addExpense } = useContext(BudgetContext);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addExpense({ category, amount });
    setCategory('');
    setAmount('');
  };

  return (
    <div className="expense-tracking">
      <h2>Expense Tracking</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseTracking;
