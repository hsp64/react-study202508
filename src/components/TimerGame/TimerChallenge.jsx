import React, {useRef, useState} from 'react';
import ResultModal from './ResultModal.jsx';

/*
  timer를 전역변수로 설정시 5초 start -> 10초 start -> 10초 stop -> 5초 stop
  을 순서대로 눌러보면 5초 타이머가 제대로 중지되지 않음

  원인은 4개의 컴포넌트가 1개의 전역변수 timer를 공유함으로써 생기는 문제임
  처음 5초짜리의 타이머아이디가 10초짜리에게 덮어씌워져 사라짐.
*/
// 타이머 id를 저장
// let timerId;


const TimerChallenge = ({title, targetTime}) => {

    // 리렌더링이 되어도 값을 컴포넌트별로 유지하는 방법 useRef
    const timerId = useRef();

    // 모달태그를 제어하기 위한 ref
    const dialogRef = useRef();

    // 남은 시간을 관리하는 상태변수
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    // start stop 활성화 조건
    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    // 게임 패배 조건
    if (timeRemaining <= 0) {
        clearInterval(timerId.current);
        dialogRef.current.showModal();
    }

    /*
      timerId를 지역변수로 두자니 리렌더링시에 사라져버림
      전역변수로 두자니 4개의컴포넌트가 공유해버리는 문제
      상태변수로 두자니 상태변경이 복잡해진다.
     */



    // 타이머를 시작하는 이벤트
    const handleStart = e => {
        console.log('타이머가 시작됨!');

        // 실제 정해진 시간만큼 타이머를 가동
        timerId.current = setInterval(() => {
            setTimeRemaining((prevTime) => prevTime - 10);
        }, 10);

        /*
          setTimeout실행시 타이머의 id(aaa)가 생성된다.
          타이머 실행시 setTimerStarted가 실행됨.

          상태변수는 setter실행시 컴포넌트를 리렌더링함.
          리렌더링할 때 기존에 저장한 timer id(aaa)를 없앤다.

          따라서 제대로 clear를 수행하지 못함
        */
    };

    // 타이머를 중단하는 함수
    const handleStop = e => {
        console.log('타이머가 중지됨! timerId - ', timerId.current);
        clearInterval(timerId.current);
        dialogRef.current.showModal();
    };

    return (
        <>
            <ResultModal
                ref={dialogRef}
                result={timeRemaining <= 0 ? 'lost' : 'won'}
                targetTime={targetTime}
            />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p>
                    {timerIsActive ? 'Time is running...' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
};

export default TimerChallenge;