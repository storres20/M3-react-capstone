// categories.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_CATEGORY = 'movies-react/movies/GET_CATEGORY';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET categories from the API
    case `${GET_CATEGORY}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getCategory = createAsyncThunk(GET_CATEGORY, async () => {
  const getCategoryUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  const response = await fetch(getCategoryUrl,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  const result = await response.json();
  return result.genres;
}); /* getCategory - createAsyncThunk - API */
