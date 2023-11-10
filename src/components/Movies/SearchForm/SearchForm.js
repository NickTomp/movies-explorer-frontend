import './SearchForm.css'
import {useState} from 'react';
import searchImg from '../../../images/search-arrow.svg';

function SearchForm(props) {
    const [isActive, setIsActive] = useState(false);
    function shortButtonClick() {
        setIsActive(!isActive);
    }
    return (
        <section className='search'>
            <form className='search__form'>
                <input className='search__input' placeholder='Фильм'></input>
                <button type='submit' className='search__button'><img className='search__img' src={searchImg} alt='search' /></button>
            </form>
            <div className='search__short'>
                <button className={isActive ? 'search__short-button search__short-button_active' : 'search__short-button'} type='button' onClick={shortButtonClick}>
                    <div className={isActive ? 'search__short-circle search__short-circle_active' : 'search__short-circle'}></div>
                </button>
                <span className='search__short-caption'>Короткометражки</span>
            </div>
            <div className='search__line' />
        </section>
    );
}
export default SearchForm;