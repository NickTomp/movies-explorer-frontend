import './Movies.css'
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import Preloader from './Preloader/Preloader.js';
function Movies(props) {
    return (
        <>
            <Preloader />
            {props.children}
            <SearchForm />
            <MoviesCardList more={true} onMyAccount={false} />
            <Footer />
        </>
    );
}
export default Movies;