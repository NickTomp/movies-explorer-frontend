import './SavedMovies.css'
import SearchForm from '../SearchForm/SearchForm.js';
import MoviesCardList from '../MoviesCardList/MoviesCardList.js';
import Footer from '../../Footer/Footer.js';
import Preloader from '../Preloader/Preloader.js';
function SavedMovies(props) {
    return (
        <>
            {props.children}
            <main>
                <Preloader />
                <SearchForm locale={'saved'} onSubmit={props.onFormSubmit} />
                <MoviesCardList onCardDelete={props.onCardDelete} more={false} onMyAccount={true} onMount={props.onMount} cardListText={props.cardListText}/>
            </main>
            <Footer />
        </>
    );
}
export default SavedMovies;