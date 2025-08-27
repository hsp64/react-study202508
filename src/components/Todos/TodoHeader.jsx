import React from 'react';
import styles from './scss/TodoHeader.module.scss';

const TodoHeader = ({ todos }) => {
    const { day, 'tasks-left': left } = styles;

    // 현재 날짜 가져오기
    const today = new Date();

    // 년도, 월, 일 추출
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    // 요일 배열
    const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayName = dayNames[today.getDay()];

    // 완료되지 않은 할 일 개수 계산
    const unfinishedCount = todos ? todos.filter(todo => !todo.completed).length : 0;

    return (
        <header>
            <h1>{year}년 {month}월 {date}일</h1>
            <div className={day}>{dayName}</div>
            <div className={left}>할 일 {unfinishedCount}개 남음</div>
        </header>
    );
};

export default TodoHeader;