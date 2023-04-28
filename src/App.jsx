import React from 'react';
import style from './App.module.css';
import {Routes, Route, Navigate} from 'react-router-dom'

import Router from './Router'

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
      <Router />
    </div>
  </main>
  <Footer />
</>
)
}

export default App;