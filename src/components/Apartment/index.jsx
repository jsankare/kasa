import React from "react";
import style from './apartment.module.css';
import PropTypes from 'prop-types';

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

Apartment.propTypes = {
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Apartment;
