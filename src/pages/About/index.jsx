import React from "react";
import Hero from "../../components/Hero";
import cover from '../../assets/hero__about.png'
import Dropdowns from "../../components/Dropdown";
import style from './about.module.css'

const dropdowns = [{
    "title": "Fiabilité",
    "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
    "id": "1"
},{
    "title": "Respect",
    "content":"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "id": "2"
},{
    "title": "Service",
    "content": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    "id": "3"
},{
    "title" : "Sécurité",
    "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    "id": "4"
}
]

function About() {
    return (
     <main className={style.container}>
     <Hero cover={cover}/>
     <div className={style.wrapper}>
        {dropdowns.map(dropdown =>
            <Dropdowns className={style.dropdownn} title={dropdown.title} children={dropdown.content} key={dropdown.id} size="big" />
            )}
     </div>
     </main>
    );
}

export default About