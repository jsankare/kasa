import React from 'react';
import style from './header.module.css';
import logo from '../../assets/kasa.png'
import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className={style.banner}>
            <div className={style.logo__container}>
            <Link to='/'><img src={logo} alt="" /></Link>
            </div>
            <div className={style.links}>
                <ul className={style.links__container}>
                    <li><NavLink to='/'>Accueil</NavLink></li>
                    <li><NavLink to='/about'>A Propos</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
