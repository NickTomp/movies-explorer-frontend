import './Movies.css'
import SearchForm from './SearchForm/SearchForm.js';
import MoviesCardList from './MoviesCardList/MoviesCardList.js';
import Footer from '../Footer/Footer.js';
import Preloader from './Preloader/Preloader.js';
function Movies(props) {
    return (
        <>
            {props.children}
            <main>
                <Preloader />
                <SearchForm />
                <MoviesCardList more={true} onMyAccount={false} />
            </main>
            <Footer />
        </>
    );
}
export default Movies;