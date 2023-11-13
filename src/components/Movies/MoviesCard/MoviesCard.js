import './MoviesCard.css'
import React, { useState } from 'react';
import SavedImg from '../../../images/filmHasBeenSaved.svg';
import deleteImg from '../../../images/deleteSavedFilm.svg';

function MoviesCard(props) {
    const [isSaved, setIsSaved] = useState(props.onMyAccount ? true : false);
    function saveFilm() {
        setIsSaved(true);
    }
    function deleteFilm() {
        alert('deleted!')
    }
    return (
        <li className='card'>
            <div className={isSaved ? props.onMyAccount ? 'card__state' : 'card__state card__state_saved' : 'card__state'}>
                {
                    isSaved ?
                        props.onMyAccount ?
                            <button className='card__state-delete-button' onClick={deleteFilm}><img className='card__state-img' src={deleteImg} alt='delete' /></button>
                            : <img className='card__state-img' src={SavedImg} alt='Картинка фильма' />
                        : <button className='card__state-button' onClick={saveFilm}><p className='card__state-text'>Сохранить</p></button>
                }
            </div>
            <img className='card__image' src={props.el.img} alt={props.el.name} />
            <div className='card__caption'>
                <h2 className='card__caption-name'>{props.el.name}</h2>
                <div className='card__caption-time'>{props.el.time}</div>
            </div>
        </li>
    );
}
export default MoviesCard;