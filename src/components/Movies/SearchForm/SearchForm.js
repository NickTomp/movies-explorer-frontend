import './SearchForm.css'
import { useState } from 'react';
import searchImg from '../../../images/search-arrow.svg';

function SearchForm(props) {
    const [isActive, setIsActive] = useState(false);
    function shortButtonClick() {
        setIsActive(!isActive);
    }
    return (
        <section className='search'>
            <form className='search__form'>
                <input className='search__input' placeholder='Фильм' required='true' ></input>
                <button type='submit' className='search__button'><img className='search__img' src={searchImg} alt='Поиск' /></button>
                <div className='search__short'>
                    <button className={isActive ? 'search__short-button search__short-button_active' : 'search__short-button'} type='button' onClick={shortButtonClick}>
                        <span className={isActive ? 'search__short-circle search__short-circle_active' : 'search__short-circle'} />
                    </button>
                    <span className='search__short-caption'>Короткометражки</span>
                </div>
            </form>


        </section>
    );
}
export default SearchForm;