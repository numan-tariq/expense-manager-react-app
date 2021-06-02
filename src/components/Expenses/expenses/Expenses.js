import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import ExpenseChart from '../expense-chart/ExpenseChart';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import ExpenseList from '../expense-list/ExpenseList';

import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = (props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  }));
  
  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter 
          selected={filteredYear} 
          onChangeFilter={filterChangeHandler} 
        />
        <ExpenseChart expenses = { filteredExpenses }/>
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;