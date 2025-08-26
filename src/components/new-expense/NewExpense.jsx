import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onSave }) => {

    // 화면상태를 제어하기위한 논리상태변수
    const [toggle, setToggle] = useState(false);

    const formComponent = <ExpenseForm onAdd={onSave} onCancel={() => setToggle(false)} />;
    const buttonComponent = <button onClick={() => setToggle(true)}>새로운 지출 추가하기</button>;

    return (
        <div className='new-expense'>
            { toggle ? formComponent : buttonComponent }
        </div>
    );
};

export default NewExpense;