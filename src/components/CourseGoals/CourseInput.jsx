import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../ui/Button';

const CourseInput = ({ onAdd }) => {

    // 목표인풋에 입력한 값 상태관리
    const [enteredText, setEnteredText] = useState('');
    // 입력값에 오류가 있는지 여부를 상태관리
    const [isValid, setIsValid] = useState(null);

    const submitHandler = e => {
        e.preventDefault();

        // 입력값 검증
        if (!enteredText.trim()) {
            setIsValid(false);
            return;
        }

        // console.log(`입력값: ${enteredText}`);
        onAdd(enteredText);

        setEnteredText('');
        setIsValid(true);
    };

    const goalInputHandler = e => {
        const inputValue = e.target.value;

        // 입력값 검증
        if (inputValue.trim()) {
            setIsValid(true);
        }

        setEnteredText(inputValue);
    };
    return (
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label style={{ color: isValid !== false ? 'black' : 'red' }}>나의 목표</label>
                <input
                    type='text'
                    onInput={goalInputHandler}
                    value={enteredText}
                    style={{
                        background: isValid !== false ? 'transparent' : 'salmon',
                        borderColor: isValid !== false ? 'black' : 'red'
                    }}
                />
            </div>
            <Button type='submit'>목표 추가하기</Button>
        </form>
    );
};

export default CourseInput;
