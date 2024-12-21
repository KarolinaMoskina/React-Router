import React, { useEffect, useState } from 'react';
import { fetchWithErrorHandling, fetchUsers } from '../api';
import { Link } from 'react-router-dom';
import styles from '../styles/UserList.module.scss';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchWithErrorHandling(fetchUsers).then(setUsers);
    }, []);

    return (
        <ul className={styles.userList}>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/user/${user.id}`}>{user.name}</Link>
                </li>
            ))}
        </ul>
    );
};

export default UserList;