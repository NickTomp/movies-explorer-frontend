import './Movies.css';
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import Preloader from './Preloader/Preloader.js';
function Movies(props) {

    return (
        <>
            <Preloader />
            {props.children}
            <main>
                <SearchForm locale={'basic'} onSubmit={props.onFormSubmit} />
                <MoviesCardList more={true} onMyAccount={false} onCardDelete={props.onCardDelete} onCardLike={props.onCardLike} cardListText={props.cardListText}/>
            </main>
            <Footer />
        </>
    );
}
export default Movies;