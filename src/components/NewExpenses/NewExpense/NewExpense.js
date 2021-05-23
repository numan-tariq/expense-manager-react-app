import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 1).toString()
    }

    props.onAddExpense(expenseData);
    // console.log('[TITLE]', expenseData.title);
    // console.log('[AMOUNT]', expenseData.amount);
    // console.log('[DATE]', expenseData.date);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;