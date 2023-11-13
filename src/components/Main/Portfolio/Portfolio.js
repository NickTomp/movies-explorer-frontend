import './Portfolio.css'
import linkArrow from '../../../images/link-arrow.svg';
function AboutMe(props) {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h3 className='portfolio__header'>Портфолио</h3>
                    <a href='https://nicktomp.github.io/russian-travel/' className='portfolio__link' target='blank'>Статичный сайт<img className='portfolio__link-img' src={linkArrow} alt='ссылка' /></a>
                    <a href='https://nicktomp.github.io/mesto/' className='portfolio__link' target='blank'>Адаптивный сайт<img className='portfolio__link-img' src={linkArrow} alt='ссылка' /></a>
                    <a href='https://ktomp.mesto.nomoredomainsrocks.ru/sign-in' className='portfolio__link' target='blank'>Одностраничное приложение<img className='portfolio__link-img' src={linkArrow} alt='ссылка' /></a>
            </div>
        </section>
    );
}
export default AboutMe;