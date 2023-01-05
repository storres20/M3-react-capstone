// movies.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_ALLCATEGORY = 'movies-react/movies/GET_ALLCATEGORY';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET movies from the API
    case `${GET_ALLCATEGORY}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getAllCategory = createAsyncThunk(GET_ALLCATEGORY, async () => {
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
}); /* getAllCategory - createAsyncThunk - API */
