import React, {useState} from 'react';
import './App.css';
import AddUsers from './components/Users/AddUsers.jsx';
import UserList from './components/Users/UserList.jsx';
import MainHeader from './components/SideEffect/MainHeader.jsx';
import Home from './components/SideEffect/Home.jsx';
import Login from './components/SideEffect/Login.jsx';

const App = () => {


    return (
        <>
            <MainHeader />
            <main>
                <Home />
                <Login />
            </main>
        </>
    );
};

export default App;
