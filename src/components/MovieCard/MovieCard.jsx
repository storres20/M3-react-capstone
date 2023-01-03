import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
  return (
    <li className={styles.movieCard}>
      <Link to={`/movie/${movie.id}`}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div>{movie.title}</div>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }).isRequired,
};
