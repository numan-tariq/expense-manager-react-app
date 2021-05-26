import React, { useState } from 'react';
import Card from '../../UI/card/Card';
import ExpenseFilter from '../expense-filter/ExpenseFilter';
import ExpenseItem from '../expense-item/ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter 
        selected={filteredYear} 
        onChangeFilter={filterChangeHandler} 
      />

      {props.items.map((expense) => (
        <ExpenseItem 
          key = { expense.id }
          title = { expense.title }
          amount = { expense.amount }
          date = { expense.date }
        />
      ))}
    </Card>
  );
}

export default Expenses;