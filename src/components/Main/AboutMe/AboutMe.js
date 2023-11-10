import './AboutMe.css'
import testPic from '../../../images/about-me-test-pic.jpg';

function AboutMe(props) {
    return (
        <section className='about-me' id='about-me'>
            <h2 className='about-me__header'>Студент</h2>
            <div className='about-me__line' />
            <div className='about-me__container'>
                <h3 className='about-me__name'>Николай</h3>
                <p className='about-me__about'>Фронтенд-разработчик</p>
                <p className='about-me__text'>Я родился и живу в Петербурге. Учился в университете, позже заинтересовался программированием. Знакомые посоветовали пройти курсы, и одно из направлений, фронтенд разработчик, привлекло моё внимание.</p>
                <a className='about-me__link' href='https://github.com/NickTomp' target='blank'>Github</a>
                <img src={testPic} alt='aboutMe' className='about-me__picture' />
            </div>
        </section>
    );
}
export default AboutMe;