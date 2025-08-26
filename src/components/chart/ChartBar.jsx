import React from 'react';

import './ChartBar.css';

// 1개의 월에 대한 막대그래프 정보
const ChartBar = ({ label, currentMonthValue, totalValue }) => {

    // 월별 지축액 비율 구하기 - 해당월의 지출액(currentMonthValue) / 해당년도의 총지출액
    let barFillHeight = '0%';

    if (totalValue > 0) {
        const percentage = (currentMonthValue / totalValue) * 100;
        barFillHeight = percentage + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barFillHeight }}></div>
            </div>
            <div className='chart-bar__label'>{label}</div>
        </div>
    );
};

export default ChartBar;