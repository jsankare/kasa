import React from "react";
import Apartment from "../../components/Apartment";
import Hero from "../../components/Hero";
import cover from '../../assets/hero__home.png'
import data from '../../datas/datas.json'
import style from './home.module.css'

function Home() {
    return (
     <>
        <Hero cover={cover} title='Chez vous, partout et ailleurs'/>
        <div className={style.apartments}>
            {data.map(apartment =>
                <Apartment title={apartment.title} cover={apartment.cover} key={apartment.id}/>  // onClick={window.open(`/housing/{id}`,"myWindow")} ?
                )}
        </div>
     </>
    );
}

export default Home