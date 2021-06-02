import React, { useState } from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [editing, setEdititng] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 1).toString()
    }

    props.onAddExpense(expenseData);
  }

  const openExpenseFormHandler = () => {
    setEdititng(true);
  };

  const closeExpenseFormHandler = () => {
    setEdititng(false);
  };

  return (
    <div className="new-expense">

      {!editing && (
        <button onClick = { openExpenseFormHandler }>
          Add New Expense
        </button>
      )}

      {editing && (
        <ExpenseForm 
          onSaveExpenseData={saveExpenseDataHandler} 
          onCancel = {closeExpenseFormHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;