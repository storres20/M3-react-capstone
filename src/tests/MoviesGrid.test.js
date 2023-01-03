import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import MoviesGrid from '../pages/Category/MoviesGrid';
import moviesReducer from '../redux/movies/movies';
import categoriesReducer from '../redux/movies/categories';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
      movie: moviesReducer,
      category: categoriesReducer,
    },
  });

  return store;
};
export default createTestStore;

// Test
describe('My Connected React-Redux Component', () => {
  let store;
  let component;

  beforeEach(() => {
    store = createTestStore();

    // Create a redux store
    component = renderer.create(
      <Provider store={store}>
        <MoviesGrid />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
