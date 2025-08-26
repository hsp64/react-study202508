import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = ({ dataPoints }) => {

    const totalValue = dataPoints.reduce((acc, dp) => acc + dp.value, 0);

    // const getTotalValue = () => {
    //   let total = 0;
    //   for (const dp of dataPoints) {
    //     total += dp.value;
    //   }
    //   return total;
    // };
    //
    // const totalValue= getTotalValue();

    return (
        <div className='chart'>
            {
                dataPoints.map(dp =>
                    <ChartBar
                        key={dp.label}
                        label={dp.label}
                        currentMonthValue={dp.value}
                        totalValue={totalValue}
                    />)
            }
        </div>
    );
};

export default Chart;