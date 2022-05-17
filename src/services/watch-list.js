const getMovies = () => {
    try {
        const watchListMovies = JSON.parse(localStorage.getItem('watchList'));
        return watchListMovies;
    } catch (e) {
        return []
    }
}

const addToLocalWatchList = (movieId) => {
    try {
        const watchListMovies = JSON.parse(localStorage.getItem('watchList'));
        localStorage.setItem('watchList', JSON.stringify([...watchListMovies, movieId]));
    } catch (e) {
        localStorage.setItem('watchList', JSON.stringify([movieId]));
    }
}

const removeFromLocalWatchList = (movieId) => {
    try {
        const watchListMovies = JSON.parse(localStorage.getItem('watchList'));
        const result = watchListMovies.filter(watchListMovie => watchListMovie != movieId);
        localStorage.setItem('watchList', JSON.stringify(result));
    } catch (e) {
        localStorage.setItem('watchList', JSON.stringify([]));
    }
}

export { getMovies, addToLocalWatchList, removeFromLocalWatchList}