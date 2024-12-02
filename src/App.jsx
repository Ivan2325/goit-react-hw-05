import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";
import { MagnifyingGlass } from "react-loader-spinner";

const HomePage = lazy(() => import("../src/components/pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../src/components/pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../src/components/pages/MovieDetailsPage/MovieDetailsPage")
);
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const NotFoundPage = lazy(() => import("../src/components/pages/NotFoundPage/NotFoundPage"));

const App = () => {
  return (
    <div className="app-wrapper">
      <Navigation />
      <div className="content-wrapper">
        <Suspense
          fallback={<MagnifyingGlass wrapperStyle={{ margin: "0 auto" }} />}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;