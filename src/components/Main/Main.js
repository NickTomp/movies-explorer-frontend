import React from "react";
import Promo from './Promo/Promo.js';
import Techs from './Techs/Techs.js';
import AboutMe from './AboutMe/AboutMe.js';
import Portfolio from './Portfolio/Portfolio.js';
import AboutProject from './AboutProject/AboutProject.js';
import Footer from '../Footer/Footer.js';

function Main(props) {
    return (
        <>
        {props.children}
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
        <Footer />
        </>
    )
}
export default Main;