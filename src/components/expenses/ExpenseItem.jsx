import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.jsx';

const ExpenseItem = ({expense}) => {

    const {title, date, price} = expense;

    // 이벤트 핸들러
    const clickHandler = e => {
        alert('click!!');
    }


    return (
        <div className="expense-item">

            <ExpenseDate expenseDate={date} />

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{price}원</div>
            </div>

            <button id='btn1' onClick={clickHandler}>버튼1</button>
        </div>
    );
};

export default ExpenseItem;