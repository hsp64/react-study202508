import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onAdd, onCancel }) => {

    // console.log('렌더링 시작!');

    // 입력값을 상태관리
    // const [title, setTitle] = useState('');
    // const [price, setPrice] = useState(0);
    // const [date, setDate] = useState(null);

    const initUserInputState = {
        title: '',
        price: 0,
        date: null
    };

    // 객체로 상태값을 한번에 관리
    const [userInput, setUserInput] = useState(initUserInputState);

    // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
    const getTodayDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // form 제출 이벤트
    const handleSubmit = e => {
        e.preventDefault();
        // console.log('form이 제출됨!');
        // const payload = { title, price, date };

        console.log('userInput: ', userInput);

        // 상위컴포넌트(App)이 내려준 onAddExpense라는 함수를 onAdd로 내려받음
        onAdd({
            ...userInput,
            date: new Date(userInput.date)
        });

        // 입력창 초기화
        /*
          input태그에다가 값을 입력하면 -> 상태변수에 저장됨  (단방향)
          상태변수의 값을 바꾸면 -> input이 갱신된다?  (X)    (양방향)
         */
        // setTitle('');
        // setPrice(0);
        // setDate(null);

        setUserInput(initUserInputState);

    };


    // 제목 입력 이벤트
    const titleChangeHandler = e => {
        /*
          리액트는 기존객체에서 프로퍼티 값만을 바꾸면 상태변경을 감지하지 못함
         */
        setUserInput(prevUserInput => ({
            ...prevUserInput,
            title: e.target.value,
        }));
    };

    const priceChangeHandler = e => setUserInput(prev => ({
        ...prev,
        price: +e.target.value,
    }));

    const dateChangeHandler = e => setUserInput(prev => ({
        ...prev,
        date: e.target.value,
    }));

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onInput={titleChangeHandler}
                        value={userInput.title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input
                        type="number"
                        min="100"
                        step="100"
                        onInput={priceChangeHandler}
                        value={userInput.price || ''}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max={getTodayDate()}
                        onInput={dateChangeHandler}
                        value={userInput.date ?? ''}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;