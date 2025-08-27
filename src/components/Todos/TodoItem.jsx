import React, {useState} from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = () => {

    const {
        text,
        remove,
        'todo-list-item': itemStyle,
        'check-circle': checkCircle,
        active,
        finish
    } = styles;

    const [isActive, setIsActive] = useState(false);

    const changeHandler = e => {
        setIsActive(!isActive);
    };

    return (
        <li className={itemStyle}>
            <div className={`${checkCircle} ${isActive ? active : ''}`} onClick={changeHandler}>
                {isActive && <MdDone />}
            </div>
            <span className={`${text} ${isActive ? finish : ''}`}>할 일 어쩌구~~</span>
            <div className={remove}>
                <MdDelete />
            </div>
        </li>
    );
};

export default TodoItem;
