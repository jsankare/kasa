import React from 'react';
import './header.css';
import logo from '../../assets/kasa.png'

function Header() {
    return (
        <div className="kasa__banner">
            <div className="logo__container">
                <a href="null"><img src={logo} alt="" /></a>
            </div>
            <div className="links">
                <ul className="links__container">
                    <li><a href="null">Accueil</a></li>
                    <li><a href="null">A propos</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header