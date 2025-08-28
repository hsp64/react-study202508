import React, {useState} from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({onAdd}) => {

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
        open: openStyle,
    } = styles;

    // form toggling
    const [toggle, setToggle] = useState(false);

    // 할 일 입력값 상태관리
    const [enteredText, setEnteredText] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        // console.log(enteredText);
        onAdd(enteredText);

        setEnteredText('');
    };

    return (
        <>
            {toggle && <div className={wrapper}>
                <form className={insertForm} onSubmit={submitHandler}>
                    <input
                        type="text"
                        placeholder="할 일을 입력 후, 엔터를 누르세요!"
                        value={enteredText}
                        onInput={e => setEnteredText(e.target.value)}
                    />
                </form>
            </div>}
            <button
                className={`${insertBtn} ${toggle ? openStyle : ''}`}
                onClick={() => setToggle(!toggle)}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;