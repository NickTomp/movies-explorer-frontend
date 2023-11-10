import './Portfolio.css'
import linkArrow from '../../../images/link-arrow.svg';
function AboutMe(props) {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h3 className='portfolio__header'>Портфолио</h3>
                <div className='portfolio__link-container'>
                    <a href='https://nicktomp.github.io/russian-travel/' className='portfolio__link'>Статичный сайт</a>
                    <img className='portfolio__link-img' src={linkArrow} alt='arrow' />
                </div>
                <div className='portfolio__link-container'>
                    <a href='https://nicktomp.github.io/mesto/' className='portfolio__link'>Адаптивный сайт</a>
                    <img className='portfolio__link-img' src={linkArrow} alt='arrow' />
                </div>
                <div className='portfolio__link-container'>
                    <a href='https://ktomp.mesto.nomoredomainsrocks.ru/sign-in' className='portfolio__link'>Одностраничное приложение</a>
                    <img className='portfolio__link-img' src={linkArrow} alt='arrow' />
                </div>
            </div>
        </section>
    );
}
export default AboutMe;