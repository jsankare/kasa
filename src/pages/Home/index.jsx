import React from "react";
import Apartment from "../../components/Apartment";
import Hero from "../../components/Hero";
import cover from '../../assets/hero__home.png'
import data from '../../datas/datas.json'
import style from './home.module.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleRedirection = (id) => {
        return navigate(`/apartment/${id}`)
    }
    return (
     <main className={style.container}>
        <Hero cover={cover} title='Chez vous, partout et ailleurs'/>
        <div className={style.apartments}>
            {data.map(apartment =>
                <Apartment title={apartment.title} cover={apartment.cover} key={apartment.id} onClick={() => handleRedirection(apartment.id)}/>  
                
                )}
        </div>
     </main>
    );
}

export default Home