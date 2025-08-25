import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';

const ExpenseList = ({ expenses: expenseList }) => {

    return (
        <div className='expenses'>
            <ExpenseItem expense={expenseList[0]}/>
            <ExpenseItem expense={expenseList[1]}/>
            <ExpenseItem expense={expenseList[2]}/>
        </div>
    );
};

export default ExpenseList;