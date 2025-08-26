import React, {useState} from 'react';

const Counter = () => {

    const [count, setCount] = useState(10);

    const increaseHandler = () => {
        setCount((prev) => prev + 1);
        setCount(prev => prev + 1);
    }
    const decreaseHandler = () => setCount(count - 1);

    return (
        <div>
            <h1>숫자: { count }</h1>
            <button onClick={increaseHandler}>증가</button>
            <button onClick={decreaseHandler}>감소</button>
        </div>
    );
};

export default Counter;