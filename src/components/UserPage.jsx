import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchWithErrorHandling, fetchUserAlbums } from '../api';
import styles from '../styles/UserPage.module.scss';

const UserPage = () => {
    const { userId } = useParams();
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchWithErrorHandling(() => fetchUserAlbums(userId)).then(setAlbums);
    }, [userId]);

    return (
        <div className={styles.userPage}>
            <h2>Альбомы пользователя {userId}</h2>
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <Link to={`/album/${album.id}`}>{album.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/">Назад к пользователям</Link>
        </div>
    );
};

export default UserPage;