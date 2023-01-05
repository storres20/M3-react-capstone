import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render as rtlRender, screen } from '@testing-library/react';
import categoriesReducer from '../redux/movies/categories';
import moviesReducer from '../redux/movies/movies';
import '@testing-library/jest-dom';
import MoviesGrid from '../pages/DetailPage/MoviesGrid';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
      category: categoriesReducer,
      movie: moviesReducer,
    },
  });

  return store;
};

const store = createTestStore();

// render component
const render2 = (component) => rtlRender(
  <Provider store={store}>
    <BrowserRouter>
      {component}
    </BrowserRouter>
  </Provider>,
);

beforeEach(() => {
  render2(<MoviesGrid />);
});

// Test
describe('<MoviesGrid />', () => {
  it('Title', async () => {
    expect(screen.getByTestId('title')).toBeInTheDocument();
    // screen.debug();
  });

  it('Search bar for Movies', () => {
    expect(screen.getByPlaceholderText('Search by title...')).toBeInTheDocument();
    expect(screen.getByTestId('SearchBar')).toBeInTheDocument();
  });

  it('Movie list', () => {
    expect(screen.getByTestId('movieList')).toBeInTheDocument();
  });

  it('Scroll Button', () => {
    expect(screen.getByTestId('ScrollButton')).toBeInTheDocument();
  });
});
