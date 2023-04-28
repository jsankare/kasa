import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Housing from './pages/Housing';
import Missdirection from './pages/404';

function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/apartment/:id" Component={Housing} />
            <Route path="/404" Component={Missdirection} />
            <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
    );
}

export default Router;
