import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movies/movies';
import allDataReducer from './movies/allData';
import categoriesReducer from './movies/categories';

const store = configureStore({
  reducer: {
    movie: moviesReducer,
    allData: allDataReducer,
    category: categoriesReducer,
  },
});

export default store;
