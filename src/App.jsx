import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserPage from './components/UserPage';
import AlbumList from './components/AlbumList';
import AlbumPage from './components/AlbumPage';
import NotFound from './components/NotFound';

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/user/:userId" element={<UserPage />} />
            <Route path="/albums" element={<AlbumList />} />
            <Route path="/album/:albumId" element={<AlbumPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default App;