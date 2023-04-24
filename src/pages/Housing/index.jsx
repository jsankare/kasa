import React from "react";
import Dropdown from '../../components/Dropdown';
import Slider from '../../components/Slider'
import data from '../../datas/datas.json';
import style from './housing.module.css';
import { Link, useParams } from 'react-router-dom';
import { element } from "prop-types";

function Housing() {

    const idHousing = useParams('id').id
    const currentHousing = data.find(data => data.id === idHousing);

    const {title, location, host, rating, equipments, description, pictures} = currentHousing

    return (
        <section className={style.main}>
            <div className={style.slider}>
            <Slider sliderImage={pictures}/>
            </div>
            <div className={style.infos}>
                <div className={style.flat}>
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                </div>
                <div className={style.host}>
                    <div className={style.intel}>
                        <span>{host.name}</span>
                        <img src={host.picture} alt="host" />
                    </div>
                    <div className={style.rating}>
                        <p>{rating}</p>  
                    </div>
                </div>
            </div>
            <div className={style.dropdowns}>
                <Dropdown title="Description"><span>{description}</span></Dropdown>
                <Dropdown title="Equipements"><ul className={style.equipments}>{equipments.map(element => <li>{element}</li>)}</ul></Dropdown>
            </div>
        </section>
    );
}

export default Housing