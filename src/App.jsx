import React from 'react';
import ExpenseList from './components/expenses/ExpenseList.jsx';

const App = () => {
    const expenseList = [
        {
            title: '닭강정',
            price: 8000,
            date: new Date(2025, 7, 13)
        },
        {
            title: '호두정과',
            price: 50000,
            date: new Date(2025, 8, 21)
        },
        {
            title: '리팩토링',
            price: 33000,
            date: new Date(2025, 4, 2)
        },
    ];

    return (
        <>
            <ExpenseList expenses={expenseList} />
        </>
    );
};

export default App;