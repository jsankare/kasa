import React from "react";
import Apartment from "../../components/Apartment";
import Hero from "../../components/Hero";
import cover from '../../assets/hero__home.png'
import data from '../../datas/datas.json'
import style from './home.module.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
     <main className={style.container}>
        <Hero cover={cover} title='Chez vous, partout et ailleurs'/>
        <div className={style.apartments}>
            {data.map(apartment =>
            <Link to={`/apartment/${apartment.id}`}>
                <Apartment title={apartment.title} cover={apartment.cover} key={apartment.id} />  
            </Link>
            )};
        </div>
     </main>
    );
}

export default Home;
