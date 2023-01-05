import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import MovieCard from '../components/MovieCard/MovieCard';

it('renders correctly', () => {
  const movie = {
    id: 399566,
    title: 'Godzilla vs. Kong',
    poster_path: '/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg',
  };

  const tree = renderer
    .create(
      <BrowserRouter>
        <MovieCard movie={movie} />
      </BrowserRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
  }),
};
