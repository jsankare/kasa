import React from "react";
import logo from '../../assets/kasa--white.png'
import style from './footer.module.css';

function Footer () {
    return (
        <div className={style.container}>
            <img src={logo} alt="Kasa logo" className={style.logo}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer