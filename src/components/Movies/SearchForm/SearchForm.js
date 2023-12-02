import './SearchForm.css'
import React from 'react';
import { useState } from 'react';
import searchImg from '../../../images/search-arrow.svg';

function SearchForm(props) {
    const [isActive, setIsActive] = useState(props.locale !== 'saved' ? localStorage.getItem('shortSwitch') === 'true' ? true : false : false);
    let searchStored = '';
    if (props.locale !== 'saved' && localStorage.getItem('searchText') !== null) {
        searchStored = localStorage.getItem('searchText')
    }

    const [search, setSearch] = useState(searchStored);


    React.useEffect(() => {
        if (props.locale !== 'saved') {
            localStorage.setItem('searchText', search);
        } else {localStorage.setItem('searchTextOnSaved', search);}
    }, [search]);
    React.useEffect(() => {
        props.onSubmit(isActive, props.locale);
    }, [isActive]);
    
    function handleSetSearch(e) {
        setSearch(e.target.value)
    }
    function shortButtonClick() {
        if (props.locale !== 'saved') {
            localStorage.setItem('shortSwitch', !isActive);
        }
        setIsActive(!isActive);
    }
    function handleSearchSubmit(e) {
        e.preventDefault();
        props.onSubmit(isActive, props.locale);
    }
    return (
        <section className='search'>
            <form className='search__form' onSubmit={handleSearchSubmit}>
                <input
                    className='search__input'
                    placeholder='Фильм'
                    required
                    type='text'
                    id="search-input"
                    name="search"
                    defaultValue={search}
                    onChange={handleSetSearch}
                />
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