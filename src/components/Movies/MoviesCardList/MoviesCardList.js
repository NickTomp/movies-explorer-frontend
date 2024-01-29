import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js';

import { mainCardsContext } from '../../../contexts/MainCardsContext.js';
import { savedCardsContext } from '../../../contexts/SavedCardsContext.js';

function MoviesCardList(props) {
    const mainCards = React.useContext(mainCardsContext);
    const savedCards = React.useContext(savedCardsContext);
    const [width, setWidth] = React.useState(window.innerWidth);
    const [cardsArray, setCardsArray] = React.useState([]);
    const [moreButton, setMoreButton] = React.useState(props.more);
    const [showCards, setShowCards] = React.useState(
        width > 1220 ? { show: 12, more: 3 } : width > 480 ? { show: 8, more: 2 } : { show: 5, more: 2 }
    );
    React.useEffect(() => {

        if(props.onMyAccount) {
            props.onMount(setCardsArray);
        }

    }, []);
    React.useEffect(() => {
        const handleResizeWindow = () => setTimeout(() => {
            setWidth(window.innerWidth);
        }, 500);
        window.addEventListener("resize", handleResizeWindow);
        if (width > 1220) { setShowCards({ show: 12, more: 3 }) }
        else if (width > 480) { setShowCards({ show: 8, more: 2 }) }
        else { setShowCards({ show: 5, more: 2 }) }
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, [width]);
    React.useEffect(() => {
        props.onMyAccount ?
            setCardsArray(savedCards)
            : setCardsArray(mainCards.slice(0, showCards.show));
    }, [mainCards, showCards, savedCards])
    React.useEffect(() => {

        if (mainCards.length === cardsArray.length) { setMoreButton(false) }
        else { setMoreButton(true) }
        
    }, [cardsArray])
    function addMoreCards() {
        const newShow = showCards.show + showCards.more;
        setShowCards({ show: newShow, more: showCards.more })
        setCardsArray(mainCards.slice(0, newShow))
    }

    return (
        <section className='card-list'>
            <ul className="card-list__elements">
                {cardsArray.length !== 0 ?
                    cardsArray.map((card) => (
                        <MoviesCard onMyAccount={props.onMyAccount} el={card} key={card.id ? card.id : card.movieId} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                    ))
                    : props.onMyAccount ? <p className='card-list__error'>Ничего не найдено</p>
                    : <p className='card-list__error'>{props.cardListText}</p> }
            </ul>
            { props.more ? moreButton ?
                <button type='button' className='card-list__more-button' onClick={addMoreCards}>
                    <span className='card-list__more-text'>Ещё</span>
                </button>
                :
                <div className='card-list__no-button'></div>
            : <div className='card-list__no-button'></div>
            }
        </section>
    );
}
export default MoviesCardList;