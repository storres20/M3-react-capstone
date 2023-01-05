import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { render as rtlRender, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage/HomePage';
import categoriesReducer from '../redux/movies/categories';
import allCategoryReducer from '../redux/movies/allCategory';
import '@testing-library/jest-dom';

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

const store = createTestStore();

// render component
const render2 = (component) => rtlRender(
  <Provider store={store}>
    {component}
  </Provider>,
);

beforeEach(() => {
  render2(<HomePage />);
});

// Test
describe('<HomePage />', () => {
  it('Title Categories', async () => {
    expect(screen.getByText('Categories')).toBeInTheDocument();
    // screen.debug();
  });

  it('Search bar for Categories', () => {
    expect(screen.getByPlaceholderText('Search by category...')).toBeInTheDocument();
    expect(screen.getByTestId('SearchCat')).toBeInTheDocument();
  });

  it('UL list', () => {
    expect(screen.getByTestId('moviesGrid')).toBeInTheDocument();
  });

  it('Scroll Button', () => {
    expect(screen.getByTestId('ScrollButton')).toBeInTheDocument();
  });
});
