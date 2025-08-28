import React, {useState} from 'react';

const TimerChallenge = ({title, targetTime}) => {

    // 타이머가 시작됐는지를 확인하는 상태값
    const [timerStarted, setTimerStarted] = useState(false);

    // 타이머가 만료되었는지 확인하는 상태값
    const [timerExpired, setTimerExpired] = useState(false);

    // 타이머 id를 저장
    let timerId;

    const handleStart = e => {
        console.log('타이머가 시작됨!');
        timerId = setTimerStarted(true);

        // 실제 정해진 시간만큼 타이머를 가동
        setTimeout(() => {
            console.log(targetTime + 's 타이머 만료!');
            setTimerExpired(true);
        }, targetTime * 1000);
    };

    /*
      setTimeout실행시 타이머의 id(aaa)가 생성된다.
      타이머 실행시 setTimerExpired가 실행됨.

      상태변수는 실행시 컴포넌트를 리렌더링함.
      리렌더링할 때 기존에 저장한 timer id(aaa)를 없앤다.

      따라서 제대로 clear를 수행하지 못함
    */

    // 타이머를 중단하는 함수
    const handleStop = e => {
        console.log('타이머가 중지됨! timerId - ', timerId);
        clearTimeout(timerId);
    };

    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className='challenge-time'>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p>
                {timerStarted ? 'Time is running...' : 'Timer inactive'}
            </p>
        </section>
    );
};

export default TimerChallenge;