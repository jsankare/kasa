import React, { useState } from "react";
import style from './dropdowns.module.css';
import PropTypes from 'prop-types'
import imgOpen from '../../assets/arrowUp.png'
import imgClosed from '../../assets/arrowDown.png'

const Dropdown = ({title, children, size='medium'}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };
console.log(style);
    return (
        <section className={`${style.container} ${style[size]}`} >
            <div className={style.wrapper} onClick={handleIsOpen}>
                <h2 className={style.title}>{title}</h2>
                <img className={style.img} src={isOpen ? imgOpen : imgClosed} alt="" />
            </div>
            {isOpen && <div className={style.content}>{children}</div>}
        </section>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'big']),
}

export default Dropdown;
