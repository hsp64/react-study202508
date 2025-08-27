import React, { useState } from 'react'; // useState 추가!
import './App.css';
import TodoTemplate from './components/Todos/TodoTemplate.jsx';

const App = () => {
    // 할 일 목록 상태 관리
    const [todos, setTodos] = useState([
        // { id: 1, text: '기존 할 일 1', completed: false },
        // { id: 2, text: '기존 할 일 2', completed: true },
        // { id: 3, text: '기존 할 일 3', completed: false }
    ]);

    // 새 할 일 추가 함수
    const addTodoHandler = (todoText) => {
        console.log('새 할 일 추가:', todoText);

        const newTodo = {
            id: Date.now(),
            text: todoText,
            completed: false
        };

        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const onDeleteHandler = (targetId) => {
        setTodos(todos.filter(g=> g.id !== targetId));
    };



    return (
        <TodoTemplate
            todos={todos}
            onAddTodo={addTodoHandler}
            onDeleteTodo={onDeleteHandler}

        />
    );
};

export default App;