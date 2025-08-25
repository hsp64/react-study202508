import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = () => {
    return (
        <div className='expense-item'>
            <div>2025-08-24</div>
            <div className='expense-item__description'>
                <h2>점심밥</h2>
                <div className='expense-item__price'>10000원</div>
            </div>
        </div>
    );
};

export default ExpenseItem;
