import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = () => axios.get(`${API_URL}/users`).then(res => res.data);

export const fetchUserAlbums = (userId) => 
    axios.get(`${API_URL}/users/${userId}/albums`).then(res => res.data);

export const fetchAlbumPhotos = (albumId) => 
    axios.get(`${API_URL}/albums/${albumId}/photos`).then(res => res.data);

export const fetchWithErrorHandling = async (fetchFunction) => {
    try {
        return await fetchFunction();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};