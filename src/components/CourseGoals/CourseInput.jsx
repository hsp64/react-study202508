import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({ onAdd }) => {

    // 목표인풋에 입력한 값 상태관리
    const [enteredText, setEnteredText] = useState('');

    const submitHandler = e => {
        e.preventDefault();
        // console.log(`입력값: ${enteredText}`);
        onAdd(enteredText);

        setEnteredText('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label>나의 목표</label>
                <input
                    type='text'
                    onInput={e => setEnteredText(e.target.value)}
                    value={enteredText}
                />
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;