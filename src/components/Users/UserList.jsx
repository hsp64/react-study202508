import React from 'react';
import styles from './UserList.module.css';
import Card from '../ui/Card';

const UserList = () => {
    return (
        <Card className={styles.users}>
            <ul></ul>
        </Card>
    );
};

export default UserList;