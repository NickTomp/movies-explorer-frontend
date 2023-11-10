import './Techs.css'

function Techs(props) {
    return (
        <section className='techs' id='techs'>
            <h2 className='techs__header'>Технологии</h2>
            <div className='techs__line' />
            <h3 className='techs__subheader'>7 технологий</h3>
            <p className='techs__text'>На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <div className='techs__container'>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>HTML</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>CSS</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>JS</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>React</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>Git</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>Express.js</p>
                </div>
                <div className='techs__tech-box'>
                    <p className='techs__tech-text'>mongoDB</p>
                </div>
            </div>
        </section>
    );
}
export default Techs;