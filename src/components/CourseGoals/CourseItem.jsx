import React from 'react';
import './CourseItem.css';

const CourseItem = ({ item, onDelete }) => {

    const deleteHandler = e => {
        // console.log(item.id + ' 삭제됨!');
        onDelete(item.id);
    };

    return <li className='goal-item' onClick={deleteHandler}>{item.text}</li>;
};

export default CourseItem;