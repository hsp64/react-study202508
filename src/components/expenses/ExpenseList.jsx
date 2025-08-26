import React, {useState} from 'react';
import './ExpenseList.css';
import ExpenseItem from './ExpenseItem.jsx';
import Card from '../ui/Card.jsx';
import ExpenseFilter from './ExpenseFilter.jsx';
import ExpenseChart from '../chart/ExpenseChart.jsx';

const ExpenseList = ({ expenses: expenseList }) => {

    const [year, setYear] = useState(new Date().getFullYear().toString());
    /*
        ExpenseFilter에서 선택한 연도 값을
        이 컴포넌트 ExpenseList로 끌어올려서 콘솔에 출력해보세요
     */
    const onFilterChange = (filteredYear) => {
        console.log(`선택된 연도: ${filteredYear}`);
        setYear(filteredYear);
    };

    // 반복문을 통해 컴포넌트 배열을 리턴하는 함수
    // const foo = () => expenseList.map(ex => <ExpenseItem expense={ex} />);

    // 화면에 조건부로 렌더링할 컴포넌트
    // let content;

    // 해당년도 지출항목들을 필터링
    const filteredExpenses = expenseList
        .filter(ex => ex.date.getFullYear().toString() === year);

    // if (filteredExpenses.length > 0) {
    //   content = filteredExpenses
    //     .map(ex => <ExpenseItem key={Math.random().toString()} expense={ex} />);
    // } else {
    //   content = <p>아직 해당년도의 지출항목이 없습니다.</p>
    // }


    return (
        <Card className='expenses'>
            <ExpenseFilter onChangeFilter={onFilterChange} />
            <ExpenseChart expenses={filteredExpenses} />

            {
                filteredExpenses.length > 0
                    ? filteredExpenses
                        .map(ex => <ExpenseItem key={Math.random().toString()} expense={ex} />)
                    : <p>아직 해당년도의 지출항목이 없습니다.</p>
            }
        </Card>
    );
};

export default ExpenseList;