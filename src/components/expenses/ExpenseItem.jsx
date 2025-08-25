import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = ({expense}) => {

    const {title, date, price} = expense;

    return (
        <div className="expense-item">

            <ExpenseDate expenseDate={date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{price}원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;