import React from "react";
import style from './apartment.module.css'

function Apartments({title, cover}) {
return (
<article className={style.container} onClick=''>
    <section className={style.wrapper}>
        <img src={cover} alt="" />
        <span>{title}</span>
    </section>
</article>
)
}

export default Apartments