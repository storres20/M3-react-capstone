import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './MoviesGrid.module.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import SearchBar from '../../components/SearchBar/SearchBar';
// Redux
import { getMovie } from '../../redux/movies/movies';
import { getAllData } from '../../redux/movies/allData';
// ***

export default function MoviesGrid() {
  const { catId } = useParams();

  /* useState - Loading */
  const [loading, setLoading] = useState(false);

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Dispatch only once */
  useEffect(() => {
    dispatch(getMovie(catId));
    dispatch(getAllData(catId));
  }, [dispatch, catId]);

  /* Load Redux State */
  const movies = useSelector((state) => state.movie);
  const categories = useSelector((state) => state.category);
  // *********************************

  const category = categories.filter((item) => item.id.toString() === catId);

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <div>
      {loading
        ? (
          <div>
            <h2 className={styles.title}>{category[0].name}</h2>

            {/* Filter Search Bar */}
            <SearchBar />

            <ul className={styles.moviesGrid}>
              {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </ul>

            {/* Scroll button for going back to TOP page */}
            <ScrollButton />
          </div>
        )

        : (
          <div className="flexLoad">
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        )}

    </div>
  );
}
