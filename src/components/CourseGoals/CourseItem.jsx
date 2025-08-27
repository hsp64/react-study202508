import React from 'react';
import styles from './CourseItem.module.css';

const CourseItem = ({ item, onDelete }) => {

    console.log(styles);


    const deleteHandler = e => {
        // console.log(item.id + ' 삭제됨!');
        onDelete(item.id);
    };

    return <li className={styles['goal-item']} onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;