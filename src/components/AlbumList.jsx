import React, { useEffect, useState } from 'react';
import { fetchWithErrorHandling, fetchUserAlbums } from '../api';
import { Link } from 'react-router-dom';
import styles from '../styles/AlbumList.module.scss';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetchWithErrorHandling(() => fetchUserAlbums(1)).then(setAlbums);
    }, []);

    return (
        <ul className={styles.albumList}>
            {albums.map(album => (
                <li key={album.id}>
                    <Link to={`/album/${album.id}`}>{album.title}</Link>
                </li>
            ))}
        </ul>
    );
};

export default AlbumList;