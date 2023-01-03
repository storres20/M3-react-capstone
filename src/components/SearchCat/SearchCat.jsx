/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchCat.module.css';
// Redux
import { updateCategory } from '../../redux/movies/categories';
// ***

function SearchCat() {
  /* Load Redux State */
  const allCategory = useSelector((state) => state.allCategory);

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* allCategory = movies (original values) */

  // Filter search bar
  const handleSearch = (event) => {
    const keyword = event.target.value;

    if (keyword !== '') {
      const results = allCategory.filter((user) => user.name.toLowerCase().includes(keyword.toLowerCase()));

      dispatch(updateCategory(results));
    } else {
      dispatch(updateCategory(allCategory));
    // If the text field is empty, show all users
    }
  };
  return (
    <div>
      <div className={styles.divFlex}>
        <input className={styles.inputFlex} type="text" placeholder="Search by category..." onChange={(event) => handleSearch(event)} />
      </div>
    </div>
  );
}

export default SearchCat;
