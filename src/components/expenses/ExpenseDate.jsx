import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({expenseDate}) => {

    // console.log(props.expenseDate);

    const month = expenseDate.toLocaleString('en-US', {month: 'long'}).slice(0, 3);

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{expenseDate.getFullYear()}</div>
            <div className="expense-date__day">{expenseDate.getDate()}</div>
        </div>
    );
};

export default ExpenseDate;
