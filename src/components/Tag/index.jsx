import React from 'react';
import style from './tag.module.css';
import PropTypes  from 'prop-types';

function Tag({content}) {

    return (
        <p className={style.tag}>{content}</p>
    );
}

Tag.propTypes = {
    content: PropTypes.string.isRequired,
    
}

export default Tag