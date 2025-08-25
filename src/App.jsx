import React from 'react';
import ExpenseList from './components/expenses/ExpenseList.jsx';
import Card from "./components/ui/Card.jsx";
import Counter from "./components/Counter.jsx";
import NewExpense from "./components/new-expense/NewExpense.jsx";

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
            <NewExpense />
            <ExpenseList expenses={expenseList} />

        </>
    );
};

export default App;