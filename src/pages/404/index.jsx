import React from 'react';
import style from './404.module.css';
import {Link} from 'react-router-dom'

function Missdirection() {
    return (
        <section className={style.container}>
            <h1 className={style.title}>404</h1>
            <h2 className={style.subtitle}>Oups ! La page que vous demandez n'existe pas.</h2>
            <p className={style.link}><Link to='/'>Retourner sur la page d'accueil</Link></p>
        </section>
    );
}

export default Missdirection