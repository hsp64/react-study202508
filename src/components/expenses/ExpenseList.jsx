import React from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from "../ui/Card.jsx";

const ExpenseList = ({ expenses: expenseList }) => {

    return (
        <Card className='expenses'>
            <ExpenseItem expense={expenseList[0]}/>
            <ExpenseItem expense={expenseList[1]}/>
            <ExpenseItem expense={expenseList[2]}/>
        </Card>
    );
};

export default ExpenseList;