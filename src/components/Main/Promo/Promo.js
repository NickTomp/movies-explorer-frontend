import './Promo.css'
import AnchorLink from "react-anchor-link-smooth-scroll";

function Promo(props) {
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
                <nav className='promo__menu'>
                    <ul className='promo__buttons'>
                        <li className='promo__button-unit'>
                        <AnchorLink className='promo__link' href='#about-project'> О проекте </AnchorLink>
                        </li>
                        <li className='promo__button-unit'>
                            <AnchorLink className='promo__link' href='#techs'>Технологии </AnchorLink>
                        </li>
                        <li className='promo__button-unit'>
                            <AnchorLink className='promo__link' href='#about-me'> Студент </AnchorLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}
export default Promo;