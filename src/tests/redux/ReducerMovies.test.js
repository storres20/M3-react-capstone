import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { updateMovie, getMovie } from '../../redux/movies/movies';

describe('test for movies Reducer', () => {
  /* updateMovie */
  test('test for updateMovie action when previousState is empty', () => {
    const previousState = [];

    const newState = [
      { id: 411, title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', poster_path: '/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg' },
    ];

    const result = reducer(previousState, updateMovie(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateMovie action when previousState has a value', () => {
    const previousState = [{ id: 411, title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', poster_path: '/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg' },
    ];

    const newState = [
      { id: 76600, title: 'Avatar: The Way of Water', poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    ];

    const result = reducer(previousState, updateMovie(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateMovie action type', () => {
    const actionType = 'movies-react/movies/UPDATE_MOVIE';

    const newState = [
      { id: 76600, title: 'Avatar: The Way of Water', poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    ];

    const result = updateMovie(newState);

    expect(result.type).toEqual(actionType);
  });

  /* getMovie */
  test('test for getMovie action', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 28;

    const result = await store.dispatch(getMovie(idGenre));
    expect(result.payload).toHaveLength(20);
  });

  test('test for getMovie action with wrong idGenre', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 0;

    const result = await store.dispatch(getMovie(idGenre));
    expect(result.payload).toHaveLength(0);
  });

  test('test for getMovie action type', async () => {
    const actionType = 'movies-react/movies/GET_MOVIE/fulfilled';

    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 28;

    const result = await store.dispatch(getMovie(idGenre));
    expect(result.type).toEqual(actionType);
  });
});
