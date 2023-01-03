import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import SearchBar from '../components/SearchBar/SearchBar';
import moviesReducer from '../redux/movies/movies';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
      movie: moviesReducer,
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
        <SearchBar />
      </Provider>,
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
