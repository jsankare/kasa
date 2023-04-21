import React, { useState } from "react";
import style from './dropdowns.module.css';
import imgOpen from '../../assets/arrowUp.png'
import imgClosed from '../../assets/arrowDown.png'

const Dropdown = ({title, content}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className={style.container}>
            <div className={style.wrapper} onClick={handleIsOpen}>
                <h2 className={style.title}>{title}</h2>
                <img className={style.img} src={isOpen ? imgOpen : imgClosed} alt="" />
            </div>
            <div>
                {isOpen && <p className={style.content}>{content}</p>}
            </div>
        </section>
    );
}

export default Dropdown