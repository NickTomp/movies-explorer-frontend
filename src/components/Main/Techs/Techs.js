import './Techs.css'

function Techs(props) {
    return (
        <section className='techs' id='techs'>
            <h2 className='techs__header'>Технологии</h2>
            <h3 className='techs__subheader'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className='techs__container'>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>HTML</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>CSS</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>JS</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>React</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>Git</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>Express.js</p>
                </li>
                <li className='techs__tech-box'>
                    <p className='techs__tech-text'>mongoDB</p>
                </li>
            </ul>
        </section>
    );
}
export default Techs;