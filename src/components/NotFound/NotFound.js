import './NotFound.css'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    return (
        <section className='notfound'>
            <h1 className='notfound__header'>404</h1>
            <p className='notfound__caption'>Страница не найдена</p>
            <button className='notfound__button' onClick={goBack} >Назад</button>
        </section>
    );
}
export default NotFound;