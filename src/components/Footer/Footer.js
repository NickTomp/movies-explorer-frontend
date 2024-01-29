import './Footer.css'

function Footer(props) {
    return (
        <footer className='footer'>
            <p className='footer__caption'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className='footer__container'>
                <p className='footer__text'>&copy; 2023</p>
                <p className='footer__text'>Николай Томп</p>
                <a href='https://github.com/NickTomp' target='blank' className='footer__link'>Github</a>
            </div>
        </footer>
    );
}
export default Footer;