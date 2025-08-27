import React from 'react';
import TodoHeader from './TodoHeader';
import styles from './scss/TodoTemplate.module.scss';
import TodoMain from './TodoMain';
import TodoInput from './TodoInput';

const TodoTemplate = ({ todos, onAddTodo, onDeleteTodo }) => { // props 받기
    console.log('TodoTemplate에서 받은 todos:', todos); // 확인용

    return (
        <div className={styles.TodoTemplate}>
            <TodoHeader todos={todos}/>
            <TodoMain todos={todos} onDelete={onDeleteTodo} /> {/* todos 전달 */}
            <TodoInput onAdd={onAddTodo} /> {/* onAdd 전달 */}
        </div>
    );
};

export default TodoTemplate;