import React from 'react';
import style from './header.module.css';
import logo from '../../assets/kasa.png'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className={style.banner}>
            <div className={style.logo__container}>
            <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className={style.links}>
                <ul className={style.links__container}>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/about'>A propos</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header