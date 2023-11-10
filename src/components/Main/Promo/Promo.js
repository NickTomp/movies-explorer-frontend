import './Promo.css'

function Promo(props) {
    function testclick() {
        console.log('clicked!')
    }
    return (
        <section className='promo'>
            <div className='promo__container'>
                <h1 className='promo__text'>Учебный проект студента факультета Веб-разработки.</h1>
                <nav className='promo__menu'>
                    <a href='#about-project'><button className='promo__button' onClick={testclick}>О проекте</button></a>
                    <a href='#techs'><button className='promo__button' onClick={testclick}>Технологии</button></a>
                    <a href='#about-me'><button className='promo__button' onClick={testclick}>Студент</button></a>
                </nav>
            </div>
        </section>
    );
}
export default Promo;