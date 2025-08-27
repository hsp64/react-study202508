import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';

import styles from './scss/TodoInput.module.scss';

const TodoInput = ({ onAdd }) => {
    console.log('styles: ', styles);

    const {
        'form-wrapper': wrapper,
        'insert-form': insertForm,
        'insert-btn': insertBtn,
    } = styles;

    // 할 일 입력에 입력한 값 상태관리
    const [enteredText, setEnteredText] = useState('');
    // 입력값에 오류가 있는지 여부를 상태관리
    const [isValid, setIsValid] = useState(null);
    // 폼 열림/닫힘 상태
    const [isOpen, setIsOpen] = useState(false);

    // 폼 제출 핸들러
    const submitHandler = (e) => {
        e.preventDefault();

        // 입력값 검증
        if (!enteredText.trim()) {
            setIsValid(false);
            return;
        }

        // console.log(`입력값: ${enteredText}`);
        // 상위 컴포넌트로 새 할 일 전달
        if (onAdd) {
            onAdd(enteredText);
        }

        setEnteredText(''); // 입력 필드 초기화
        setIsValid(true);
        setIsOpen(false); // 닫기
    };

    // 입력값 변경 핸들러
    const todoInputHandler = (e) => {
        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim()) {
            setIsValid(true);
        }

        setEnteredText(inputValue);
    };

    // 버튼 클릭 핸들러
    const handleButtonClick = () => {
        setIsOpen(!isOpen);
        // 폼을 닫을 때 상태 초기화
        if (isOpen) {
            setEnteredText('');
            setIsValid(null);
        }
    };

    return (
        <>
            {isOpen && (
                <div className={wrapper}>
                    <form className={insertForm} onSubmit={submitHandler}>
                        <input
                            type='text'
                            placeholder='할 일을 입력 후, 엔터를 누르세요!'
                            value={enteredText}
                            onInput={todoInputHandler}
                            autoFocus
                            style={{
                                borderColor: isValid === false ? 'red' : '#94989b',
                                background: isValid === false ? '#ffebee' : 'white'
                            }}
                        />
                    </form>
                </div>
            )}
            <button
                className={`${insertBtn} ${isOpen ? styles.open : ''}`}
                onClick={handleButtonClick}
            >
                <MdAdd />
            </button>
        </>
    );
};

export default TodoInput;