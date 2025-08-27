import React from 'react';

import styles from './scss/TodoMain.module.scss';
import TodoItem from './TodoItem';

const TodoMain = ({ todos, onDelete }) => { // props 받기
    console.log('TodoMain에서 받은 todos:', todos); // 확인용

    return (
        <ul className={styles['todo-list']}>
            {todos && todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
};

export default TodoMain;