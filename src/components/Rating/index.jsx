import React from "react";
import style from './rating.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from '../../assets/star.svg';

function Rating({ rating }) {
  const displayStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClassName = i <= rating ? style.filled : style.empty;
      stars.push(
        <Star
          alt=""
          className={`${style.star} ${starClassName}`}
          key={i}
        />
      );
    }
    return stars;
  };

  return <div>{displayStars()}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
