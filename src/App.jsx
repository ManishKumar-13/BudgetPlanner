// App.js
import React from 'react';
import { BudgetProvider } from './contexts/BudgetContext';
import BudgetSetting from './components/BudgetSetting';
import ExpenseTracking from './components/ExpenseTracking';
import FinancialMonitoring from './components/FinancialMonitoring';
import './App.css';

const App = () => {
  return (
    <BudgetProvider>
      <div className="app">
        <h1>Budget Planner</h1>
        <BudgetSetting />
        <ExpenseTracking />
        <FinancialMonitoring />
      </div>
    </BudgetProvider>
  );
};

export default App;
