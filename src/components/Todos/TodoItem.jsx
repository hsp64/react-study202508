import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({ item, onDelete, onCheck }) => {

    const { text, remove, finish, active, 'todo-list-item': itemStyle, 'check-circle': checkCircle } = styles;

    const {id, title, done} = item;

    return (
        <li className={itemStyle}>
            <div className={`${checkCircle} ${done ? active : ''}`} onClick={() => onCheck(id)}>
                {done && <MdDone/>}
            </div>
            <span className={`${text} ${done ? finish : ''}`}>{title}</span>
            <div className={remove} onClick={() => onDelete(id)}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;