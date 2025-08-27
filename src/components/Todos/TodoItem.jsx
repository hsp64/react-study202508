import React, {useState} from 'react';
import { MdDelete, MdDone } from 'react-icons/md';

import styles from './scss/TodoItem.module.scss';

const TodoItem = ({ todo, onDelete }) => { // props 받기
    const { text, remove, 'todo-list-item': itemStyle, 'check-circle': checkCircle, active, finish} = styles;

    const [isActive, setIsActive] = useState(todo?.completed || false); // 초기값을 props에서 가져오기

    const changeHandler = () => {
        setIsActive(!isActive);
    };


    const deleteHandler = () => {
        onDelete(todo.id);
    };

    return (
        <li className={itemStyle}>
            <div className={`${checkCircle} ${isActive ? active : ''}`} onClick={changeHandler}>
                {isActive && <MdDone />}
            </div>
            <span className={`${text} ${isActive ? finish : ''}`}>
                {todo?.text || '할 일 어쩌구~~'} {/* props에서 텍스트 가져오기 */}
            </span>
            <div className={remove} onClick={deleteHandler}>
                <MdDelete />
            </div>
        </li>
    );
};
export default TodoItem;
