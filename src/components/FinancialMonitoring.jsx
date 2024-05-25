// components/FinancialMonitoring.js
import React, { useContext } from 'react';
import { BudgetContext } from '../contexts/BudgetContext';

const FinancialMonitoring = () => {
  const { budgets, expenses } = useContext(BudgetContext);

  const totalBudget = budgets.reduce((acc, budget) => acc + parseFloat(budget.amount), 0);
  const totalExpense = expenses.reduce((acc, expense) => acc + parseFloat(expense.amount), 0);

  const remainingBudget = totalBudget - totalExpense;

  return (
    <div className="financial-monitoring">
      <h2>Financial Monitoring</h2>
      <div className="financial-summary">
        <p>Total Budget: ${totalBudget}</p>
        <p>Total Expense: ${totalExpense}</p>
        <p>Remaining Budget: ${remainingBudget}</p>
      </div>
      <div className="expense-list">
        <h3>Expense List</h3>
        <ul>
          {expenses.map((expense, index) => (
            <li key={index}>
              <span>{expense.category}:</span> ${expense.amount}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FinancialMonitoring;
