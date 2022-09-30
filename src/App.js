import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import { Header } from './modules/Header'
import MovieList from './modules/MovieList/MovieList'
import AddToWatchListComponent from './modules/AddToWatchListComponent/AddToWatchListComponent'
import RemoveFromList from './modules/RemoveFromList/RemoveFromList'
import Loader from './modules/Loader/Loader';
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { getMedias, addToWatchlist, removeFromWatchlist } from "./api/";
import { handleApi } from './api/utils'
import './styles.css'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [showTopBtn, setShowTopBtn] = useState(false);

  const fetchMovies = async () => {
    setLoading(true);

    const result = await handleApi(getMedias);

    setMovies(result);
    setTimeout(function () {
      setLoading(false);
    }, 2000)
  }

  const scollToRef = useRef(null);
  const goToList = () => {
    scollToRef.current.scrollIntoView({
      top: 200,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    fetchMovies();
    const favouritesMovie = JSON.parse(
      localStorage.getItem('List-of-movies-and-shows')
    );
    setFavourites(favouritesMovie || []);

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const saveToLocalStorage = (itemsMovie) => {
    localStorage.setItem('List-of-movies-and-shows', JSON.stringify(itemsMovie))
  };

  const addToList = async (movie) => {
    const filmIsExist = favourites.find(item => item.id === movie.id)
    if (filmIsExist) return

    await handleApi(() => addToWatchlist(movie.id))

    const newWatchList = [...favourites, movie];
    setFavourites(newWatchList);
    saveToLocalStorage(newWatchList);
  };

  const deleteFromWatchList = async (movie) => {

    await handleApi(() => removeFromWatchlist(movie.id))

    const newWatchList = favourites.filter(
      (favourite) => favourite.id !== movie.id);
    setFavourites(newWatchList);
    saveToLocalStorage(newWatchList);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Header goToList={goToList} />
      <main>
        <div className='container'>
          <h1>List of movies and shows</h1>
          {loading && <Loader />}
          {movies.length > 0 ? (
            <MovieList
              movies={movies}
              componentWatchList={AddToWatchListComponent}
              handleWatch={addToList}
            />) : (loading ? null : <p>List of movies and shows is empty</p>)}
        </div>
        <div className='container favourite-list' ref={scollToRef}>
          <h1>Watch List</h1>
          {favourites.length === 0 ?
            (<p className="empty-block">You don't have a movie in your watchlist</p>) : (
              <MovieList
                movies={favourites}
                componentWatchList={RemoveFromList}
                handleWatch={deleteFromWatchList}
              />)}
        </div>
      </main>
      <div className='icon-position'>
        {" "}
        {showTopBtn && (
          <BsArrowUpCircleFill onClick={goToTop} className="icon-to-top icon-style" />
        )}
        {" "}
      </div>
      <ToastContainer />
    </div>
  )
}

MovieList.propTypes = {
  favourites: PropTypes.arrayOf(PropTypes.object),
  componentWatchList: PropTypes.func,
  handleWatch: PropTypes.func
}
export default App;