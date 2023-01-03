/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBar.module.css';
// Redux
import { updateMovie } from '../../redux/movies/movies';
// ***

function SearchBar() {
  /* Load Redux State */
  const allData = useSelector((state) => state.allData);

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* allData = movies (original values) */

  // Filter search bar
  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allData.filter((user) => user.title.toLowerCase().includes(keyword.toLowerCase()));

      dispatch(updateMovie(results));
    } else {
      dispatch(updateMovie(allData));
    // If the text field is empty, show all users
    }
  };
  return (
    <div>
      <div className={styles.divFlex}>
        <input className={styles.inputFlex} type="text" placeholder="Search by title..." onChange={(event) => handleSearch(event)} />
      </div>
    </div>
  );
}

export default SearchBar;
