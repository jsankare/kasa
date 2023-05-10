import React from 'react';
import style from './App.module.css';
import Router from './Router';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <main className={style.main}>
            <div className={style.container}>
                <Header />
                <Router />
            </div>
            <Footer />
        </main>
    )
};

export default App;
