// movies.js
import { createAsyncThunk } from '@reduxjs/toolkit';

// Actions... types
const GET_ALLDATA = 'movies-react/movies/GET_ALLDATA';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    // do reducer stuff
    // GET movies from the API
    case `${GET_ALLDATA}/fulfilled`:
      return action.payload;
    default: return state;
  }
}

// Action Creators
export const getAllData = createAsyncThunk(GET_ALLDATA, async (id) => {
  const getMovieUrl = `https://api.themoviedb.org/3/discover/movie?with_genres=${id}`;
  const response = await fetch(getMovieUrl,
    {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  const result = await response.json();
  return result.results;
}); /* updateMovie - searchBar component */
