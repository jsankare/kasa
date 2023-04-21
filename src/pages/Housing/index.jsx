import React from "react";
import Dropdown from '../../components/Dropdown';
import Slider from '../../components/Slider'
import data from '../../datas/datas.json';
import style from './housing.module.css';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom';

function Housing() {

    const [sliderImage, setSliderImage] = useState([]);

    const idHousing = useParams('id').id
    const currentHousing = data.filter(data => data.id === idHousing);

    useEffect(() => {
		const dataCurrentAccomodation = data.filter(data => data.id === idHousing);
		setSliderImage(dataCurrentAccomodation[0].pictures);
	}, [idHousing]);

    const title = currentHousing[0].title;
    const location = currentHousing[0].location
    const name = currentHousing[0].host.name.split(' '); 
    const picture = currentHousing[0].host.picture
	const rating = currentHousing[0].rating;
	const equipments = currentHousing[0].equipments;
	const description  = currentHousing[0].description;

    return (
        <section className={style.main}>
            <div className={style.slider}>
            <Slider sliderImage={sliderImage}/>
            </div>
            <div className={style.infos}>
                <div className={style.flat}>
                    <h2>{title}</h2>
                    <h3>{location}</h3>
                </div>
                <div className={style.host}>
                    <div className={style.intel}>
                        <span>{name}</span>
                        <img src={picture} alt="host" />
                    </div>
                    <div className={style.rating}>
                        <p>{rating}</p>  
                    </div>
                </div>
            </div>
            <div className={style.dropdowns}>
                <Dropdown/>
                <Dropdown/>
            </div>
        </section>
    );
}

export default Housing