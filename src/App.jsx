import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MoviesGrid from './pages/Category/MoviesGrid';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import NavbarRB from './components/Navbar/NavbarRB';
import MovieDetails from './pages/DetailPage/MovieDetails';
import HomePage from './pages/HomePage/HomePage';
import { getCategory } from './redux/movies/categories';

export default function App() {
  /* Load Redux State */
  const category = useSelector((state) => state.category);
  // *********************************

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Dispatch only once */
  useEffect(() => {
    if (category.length === 0) {
      dispatch(getCategory());
    }
  }, [dispatch, category]);

  return (
    <BrowserRouter>
      <NavbarRB />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:catId" element={<MoviesGrid />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detailPage/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
