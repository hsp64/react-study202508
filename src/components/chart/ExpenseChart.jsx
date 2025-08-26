import React from 'react';
import Chart from './Chart';

const ExpenseChart = ({ expenses }) => {

    console.log('해당년도 지출배열: ', expenses);

    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    // 필터링된 지출 배열을 통해 chartDataPoints의 value들을 채우기
    expenses.forEach(ex => {
        // console.log(ex.date.getMonth());
        chartDataPoints[ex.date.getMonth()].value += ex.price;
    });

    // console.log(chartDataPoints);

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;