import React from "react";
import style from './hero.module.css';

function Hero(props) {
    return (
        <section className={style.wrapper}>
            <div className={style.container}>
                <img className={style.cover}  src={props.cover} alt="" />
                <p className={style.text}>{props.title}</p>
            </div>
        </section>
    );
}

export default Hero