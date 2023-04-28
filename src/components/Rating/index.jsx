import React from "react";
import style from './rating.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as Star } from '../../assets/star.svg';

function Rating({ rating }) {
  const displayStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const isActive = i <= rating;
      const starClassName = isActive ? style.filled : style.empty;
      const dataId = isActive ? 'active' : 'inactive';
      stars.push(
        <Star
          role='star'
          alt=""
          className={starClassName}
           data-testid={dataId}
          key={i}
        />
      );
    }
    return stars;
  };

  return <div className={style.container}>{displayStars()}</div>;
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
