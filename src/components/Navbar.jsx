import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.scss';

const Navbar = () => (
    <nav className={styles.navbar}>
        <Link to="/">Пользователи</Link>
        <Link to="/albums">Альбомы</Link>
    </nav>
);

export default Navbar;