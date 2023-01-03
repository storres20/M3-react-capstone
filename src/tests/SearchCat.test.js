import React from 'react';
import renderer from 'react-test-renderer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import categoriesReducer from '../redux/movies/categories';
import allCategoryReducer from '../redux/movies/allCategory';
import SearchCat from '../components/SearchCat/SearchCat';

// configureStore
const createTestStore = () => {
  const store = configureStore({
    reducer: {
      category: categoriesReducer,
      allCategory: allCategoryReducer,
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
        <SearchCat />
      </Provider>,
    ).toJSON();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
