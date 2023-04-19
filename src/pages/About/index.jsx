import React from "react";
import Hero from "../../components/Hero";
import cover from '../../assets/hero__about.png'
import Dropdowns from "../../components/Dropdowns";


function About() {
    return (
     <>
     <Hero cover={cover}/>
     <Dropdowns/>
     </>
    );
}

export default About