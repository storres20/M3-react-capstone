import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { updateCategory, getCategory } from '../../redux/movies/categories';

describe('test for movies Reducer', () => {
  /* updateCategory */
  test('test for updateCategory action when previousState is empty', () => {
    const previousState = [];

    const newState = [
      { id: 411, title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', poster_path: '/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg' },
    ];

    const result = reducer(previousState, updateCategory(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateCategory action when previousState has a value', () => {
    const previousState = [{ id: 411, title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe', poster_path: '/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg' },
    ];

    const newState = [
      { id: 76600, title: 'Avatar: The Way of Water', poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    ];

    const result = reducer(previousState, updateCategory(newState));

    expect(result).toEqual(newState);
  });

  test('test for updateCategory action type', () => {
    const actionType = 'movies-react/movies/UPDATE_CATEGORY';

    const newState = [
      { id: 76600, title: 'Avatar: The Way of Water', poster_path: '/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg' },
    ];

    const result = updateCategory(newState);

    expect(result.type).toEqual(actionType);
  });

  /* getCategory */
  test('test for getCategory action', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getCategory());
    expect(result.payload).toHaveLength(19);
  });

  test('test for getCategory action type', async () => {
    const actionType = 'movies-react/movies/GET_CATEGORY/fulfilled';

    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getCategory());
    expect(result.type).toEqual(actionType);
  });
});
