import React from "react";
import style from "./hero.module.css";
import PropTypes from 'prop-types';

function Hero({cover, title}) {
  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <img className={style.cover} src={cover} alt="" />
        <p className={style.text}>{title}</p>
      </div>
    </section>
  );
}

Hero.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default Hero;
