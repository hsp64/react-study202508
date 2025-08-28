import React, {forwardRef} from 'react';

const ResultModal = forwardRef(({ result, targetTime, timeRemaining, onReset }, ref) => {

    // 남은 시간을 밀리초에서 초로 변환
    const formattedTime = (timeRemaining / 1000).toFixed(2);

    // 점수 만들기
    const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

    return (
        <dialog ref={ref} className='result-modal'>
            <h2>Your {result}!</h2>
            {result === 'won' && <h2>Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedTime} seconds left.</strong>
            </p>
            <form method='dialog'>
                <button onClick={onReset}>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;