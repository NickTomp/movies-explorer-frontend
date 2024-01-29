import './AboutProject.css'

function AboutProject(props) {
    return (
        <section className='about' id='about-project'>
            <div className='about__container'>
                <h2 className='about__header'>О проекте</h2>
                
                <div className='about__text'>
                    <h3 className='about__text-header'>Дипломный проект включал 5 этапов</h3>
                    <h3 className='about__text-header second-header'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about__text-information'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    <p className='about__text-information'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
                <div className='about__time'>
                    <div className='about__time-oneweek'><p className='about__time-text'>1 неделя</p></div>
                    <div className='about__time-fourweeks'><p className='about__time-text'>4 недели</p></div>
                    <p className='about__time-back'>Back-end</p>
                    <p className='about__time-front'>Front-end</p>
                </div>
                
            </div>
        </section>
    );
}
export default AboutProject;