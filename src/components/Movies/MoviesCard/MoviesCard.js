import './MoviesCard.css'
import React, { useState } from 'react';
import SavedImg from '../../../images/filmHasBeenSaved.svg';
import deleteImg from '../../../images/deleteSavedFilm.svg';

function MoviesCard(props) {
    const [isLiked, setIsLiked] = useState('_id' in props.el ? true : false );

    function likeCard() {
        props.onCardLike(setIsLiked, props.el.country, props.el.director, props.el.duration, props.el.year, props.el.description, `https://api.nomoreparties.co${props.el.image.url}`, props.el.trailerLink, props.el.nameRU, props.el.nameEN, `https://api.nomoreparties.co${props.el.image.formats.thumbnail.url}`, props.el.id);
    }

    function deleteCard() {
        props.onCardDelete(setIsLiked, props.el._id);
    }

    React.useEffect(() => {
        if (props.el.id === props.el.movieId) { setIsLiked(true) }
    }, [])
    return (
        <li className='card'>

            
            <div className={props.onMyAccount ? 'card__state' : isLiked ? 'card__state card__state_saved' : 'card__state'} >
                {
                    props.onMyAccount ?
                        <button type='button' className='card__state-delete-button' onClick={deleteCard}><img className='card__state-img' src={deleteImg} alt='удалить' /></button>
                        : isLiked ?
                            <button type='button' className='card__state-delete-button' onClick={deleteCard}><img className='card__state-img' src={SavedImg} alt='сохранено. удалить?' /></button>
                            : <button type='button' className='card__state-button' onClick={likeCard}><span className='card__state-text'>Сохранить</span></button>
                }
            </div>
            

            <img className='card__image' src={props.onMyAccount ?
                props.el.image
                : isLiked ? `https://api.nomoreparties.co${props.el.image.url}`
                    : `https://api.nomoreparties.co${props.el.image.url}`
            } alt={props.el.nameRU} />

            <div className='card__caption'>
                <h2 className='card__caption-name'>{props.el.nameRU}</h2>
                <div className='card__caption-time'>{Math.floor(props.el.duration / 60) + 'ч ' + props.el.duration % 60 + 'м'}</div>
            </div>
        </li>
    );
}
export default MoviesCard;