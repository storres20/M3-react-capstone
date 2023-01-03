import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import get from '../../utils/httpClient';
import styles from './MovieDetails.module.css';

export default function MovieDetails() {
  /* useState - Loading */
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    get(`/movie/${movieId}`).then((data) => {
      setMovie(data);
      setLoading(true);
    });
    return () => {
      // Fix ... Warning: Can't perform a React state update on an unmounted component.
      setMovie({});
    };
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div>
      {
    loading

      ? (
        <div className={styles.detailsContainer}>
          <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
          <div className={`${styles.col} ${styles.movieDetails}`}>
            <Link to="/"><div className={styles.button}>Back</div></Link>
            <p className={styles.firstItem}>
              <strong>Title: </strong>
              {movie.title}
            </p>
            <p>
              <strong>Genres: </strong>
              {movie.genres.map((genre) => genre.name).join(', ')}
            </p>
            <p>
              <strong>Description: </strong>
              {movie.overview}
            </p>
          </div>
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
      )

  }
    </div>
  );
}
