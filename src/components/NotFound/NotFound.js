import './NotFound.css'
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();
    function goBack() {
        navigate(-1);
    }
    return (
        <main className='notfound'>
            <h1 className='notfound__header'>404</h1>
            <p className='notfound__caption'>Страница не найдена</p>
            <button className='notfound__button' type='button' onClick={goBack} >Назад</button>
        </main>
    );
}
export default NotFound;