import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import About from './pages/About';
import Missdirection from './pages/404';

function App() {
return (
<>
    <Header />
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={About} />
      {/* <Route path="/:id" Component={Housing} /> */}
      <Route path="/*" Component={Missdirection} />
    </Routes>
    <Footer />
</>
)
}

export default App;