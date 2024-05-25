// components/BudgetSetting.js
import React, { useContext, useState } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const BudgetSetting = () => {
  const { addBudget } = useContext(BudgetContext);
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBudget({ category, amount });
    setCategory('');
    setAmount('');
  };

  return (
    <div className="budget-setting">
      <h2>Budget Setting</h2>
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
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
};

export default BudgetSetting;
