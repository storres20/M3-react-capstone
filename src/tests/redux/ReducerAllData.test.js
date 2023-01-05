import '@testing-library/jest-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer, { getAllData } from '../../redux/movies/allData';

describe('test for movies Reducer', () => {
  /* getAllData */
  test('test for getAllData action', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 28;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.payload).toHaveLength(20);
  });

  test('test for getAllData action with wrong idGenre', async () => {
    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 0;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.payload).toHaveLength(0);
  });

  test('test for getAllData action type', async () => {
    const actionType = 'movies-react/movies/GET_ALLDATA/fulfilled';

    /* Set up store */
    const store = configureStore({
      reducer,
    });

    /* URL id */
    const idGenre = 28;

    const result = await store.dispatch(getAllData(idGenre));
    expect(result.type).toEqual(actionType);
  });
});
