import React from 'react'
import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard.js';
function MoviesCardList(props) {
    const beginCards = [{
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: 'test kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik super looooooooooooooooooong name',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik',
        time: '1ч 23м'
    },
    ];
    const secondCards = [{
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: 'test kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik super looooooooooooooooooong name',
        time: '1ч 23м'
    },
    {
        img: 'https://steamuserimages-a.akamaihd.net/ugc/1806508520590495539/14FA2FA73B925376B2777025EBAF07B489659665/?imw=512&amp;imh=384&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        name: ' another test kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34м'
    },
    {
        img: 'https://wallbox.ru/resize/1920x1200/wallpapers/main/201620/37da0352f83ab7b.jpg',
        name: 'more cats',
        time: '1ч 34sм'
    },
    ];
    const savedCards = [{
        img: 'https://wallbox.ru/resize/1024x768/wallpapers/main2/202118/162006107660902b9462e819.32124950.jpg',
        name: 'saved kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://wallbox.ru/resize/1024x768/wallpapers/main2/202118/162006107660902b9462e819.32124950.jpg',
        name: 'another saved kotik',
        time: '1ч 23м'
    },
    {
        img: 'https://wallbox.ru/resize/1024x768/wallpapers/main2/202118/162006107660902b9462e819.32124950.jpg',
        name: 'another saved kotik super looooooooooooooooooong name',
        time: '1ч 23м'
    },
    ]
    const [cards, setCardsArray] = React.useState([]);
    React.useEffect(() => {
        props.onMyAccount ?
            setCardsArray(savedCards)
            : setCardsArray(beginCards)
    }, [])
    function temporaryJoke() {
        setCardsArray(secondCards)
    }

    return (
        <section className='card-list'>
            <ul className="card-list__elements">
                {cards.map((card) => (
                    <MoviesCard onMyAccount={props.onMyAccount} el={card} key={Math.random()} />
                ))}
            </ul>
            {props.more ? <button type='button' className='card-list__more-button' onClick={temporaryJoke}><p className='card-list__more-text'>Ещё</p></button> : <div className='card-list__no-button'></div>}
        </section>
    );
}
export default MoviesCardList;