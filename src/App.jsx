import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About';

function App() {
return (
<>
    <Header />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
    </Routes>
    <Footer />
</>
)
}

export default App;