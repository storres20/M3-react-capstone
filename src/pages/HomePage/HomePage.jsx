import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './HomePage.module.css';
import ScrollButton from '../../components/ScrollButton/ScrollButton';
import { updateMovie } from '../../redux/movies/movies';
import SearchCat from '../../components/SearchCat/SearchCat';
import { getCategory } from '../../redux/movies/categories';

export default function HomePage() {
  /* Load Redux State */
  const categories = useSelector((state) => state.category);
  // *********************************

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Clean - Redux movies store */
  useEffect(() => {
    dispatch(updateMovie([]));
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div>
      <h2 className={styles.title}>Categories</h2>
      {/* Filter Search Category */}
      <SearchCat />
      <ul className={styles.moviesGrid} data-testid="moviesGrid">
        {categories.map((movie) => (
          <Link key={movie.id} to={`/detailPage/${movie.id}`}>
            <li className={styles.movieCard}>
              <div>{movie.name}</div>
            </li>
          </Link>
        ))}
      </ul>

      {/* Scroll button for going back to TOP page */}
      <ScrollButton />
    </div>
  );
}
