import React, { useEffect, useState } from "react"; // Combine import statements
import { useLocation } from "react-router-dom"; // Add ".dom" to import statement
import style from "./hero.module.css";

function Hero(props) {
  const [aboutPage, setAboutPage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setAboutPage(true);
    }
  }, [location]); // Add "location" as a dependency

  return (
    <section className={aboutPage ? style.wrapper : style.wrapperHome}>
      <div className={style.container}>
        <img className={style.cover} src={props.cover} alt="" />
        <p className={style.text}>{props.title}</p>
      </div>
    </section>
  );
}

export default Hero;
