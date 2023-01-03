import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import MoviesGrid from './pages/DetailPage/MoviesGrid';
import AboutPage from './pages/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import NavbarRB from './components/Navbar/NavbarRB';
import MovieDetails from './pages/Movie/MovieDetails';
import HomePage from './pages/HomePage/HomePage';
import { getCategory } from './redux/movies/categories';
import { getAllCategory } from './redux/movies/allCategory';

export default function App() {
  /* Load Redux State */
  // const category = useSelector((state) => state.category);
  // *********************************

  /* Setup Redux dispatch */
  const dispatch = useDispatch();

  /* Dispatch only once */
  dispatch(getCategory());
  dispatch(getAllCategory());

  return (
    <BrowserRouter>
      <NavbarRB />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detailPage/:catId" element={<MoviesGrid />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/movie/:movieId" element={<MovieDetails />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
