import React from "react";
import style from './apartment.module.css'

function Apartment({title, cover,}) {
    return (
    <article className={style.container}>
        <section className={style.wrapper}>
            <img src={cover} alt="" />
            <span>{title}</span>
        </section>
    </article>
    )
}

export default Apartment