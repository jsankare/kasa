import React from 'react';
import style from './App.module.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import About from './pages/About';
import Housing from './pages/Housing';
import Missdirection from './pages/404';

function App() {
return (
<>
  <main className={style.main}>
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/apartment/:id" Component={Housing} />
        <Route path="/404" Component={Missdirection} />
        <Route path="*" element={<Navigate to="/404"/>} />
      </Routes>
    </div>
  </main>
  <Footer />
</>
)
}

export default App;