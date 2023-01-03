import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import HomePage from '../pages/HomePage/HomePage';
import categoriesReducer from '../redux/movies/categories';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
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
        <HomePage />
      </Provider>,
    ).toJSON();
  });

  test('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
