import React from "react";
import logo from '../../assets/kasa--white.png'
import './footer.css';

function Footer () {
    return (
        <div className="container">
            <img src={logo} alt="Kasa logo" className="kasa__logo"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer