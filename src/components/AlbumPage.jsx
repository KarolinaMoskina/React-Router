import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchWithErrorHandling, fetchAlbumPhotos } from '../api';
import styles from '../styles/AlbumPage.module.scss';

const AlbumPage = () => {
    const { albumId } = useParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWithErrorHandling(() => fetchAlbumPhotos(albumId))
            .then(data => {
                setPhotos(data);
                setLoading(false);
            });
    }, [albumId]);

    return (
        <div className={styles.albumPage}>
            {loading ? (
                <p>Загрузка...</p>
            ) : (
                <>
                    <h2>Фотографии альбома {albumId}</h2>
                    <ul>
                        {photos.map(photo => (
                            <li key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                                <p>{photo.title}</p>
                            </li>
                        ))}
                    </ul>
                    <Link to="/" >Назад к пользователям</Link>
                </>
            )}
        </div>
    );
};

export default AlbumPage;