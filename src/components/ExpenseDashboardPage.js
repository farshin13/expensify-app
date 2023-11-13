import React from 'react';
import ExpenseList from "./ExpenseList";
import ExpensListFilter from "./ExpensListFilter";

const ExpenseDashboardPage = () => (
  <div>
      <ExpensListFilter />
      <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
