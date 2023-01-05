import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllCategory } from '../../redux/movies/allCategory';

describe('test for movies Reducer', () => {
  /* getAllCategory */
  test('test for getAllCategory action', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getAllCategory());
    expect(result.payload).toHaveLength(19);
  });

  test('test for getAllCategory action type', async () => {
    const actionType = 'movies-react/movies/GET_ALLCATEGORY/fulfilled';

    /* Set up store */
    const store = configureStore({
      reducer,
    });

    const result = await store.dispatch(getAllCategory());
    expect(result.type).toEqual(actionType);
  });
});
