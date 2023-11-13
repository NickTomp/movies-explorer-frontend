import './Promo.css'
import { useNavigate } from "react-router-dom";

function Promo(props) {
    const navigate = useNavigate();
    function goToAboutProject() {
        navigate('#about-project')
    }
    function goToTechs() {
        navigate('#techs')
    }
    function goToAboutMe() {
        navigate('#about-me')
    }
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
                <nav className='promo__menu'>
                    <button className='promo__button' type='button' onClick={goToAboutProject}>О проекте</button>
                    <button className='promo__button' type='button' onClick={goToTechs}>Технологии</button>
                    <button className='promo__button' type='button' onClick={goToAboutMe}>Студент</button>
                </nav>
            </div>
        </section>
    );
}
export default Promo;