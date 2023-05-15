import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";

import { getMovies } from "../../feature/movies/moviesSlice";
import { MovieCard } from "../MovieCard";
import { Preloader } from "../Preloader";
import { PaginationLine } from "../PaginationLine";
import { ErrorPage } from "../ErrorPage";

import "./MoviesList.scss";

const MoviesList = () => {
  const dispatch = useAppDispatch();

  const { movies, searchText, categoryMovies, loading, currentPage, error } =
    useAppSelector(({ movies }) => movies);

  useEffect(() => {
    dispatch(getMovies({ searchText, categoryMovies, currentPage }));
  }, [searchText, categoryMovies, currentPage, dispatch]);

  const renderMovies = movies.map((movie, index) => (
    <MovieCard key={index} data={movie} />
  ));

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="movie-wrapper">
          <div className="movie-list">
            {renderMovies.length === 0 ? (
              <div className="empty-container">Movie not found!</div>
            ) : (
              <>
                <h2>{categoryMovies.toUpperCase()}</h2>
                <div className="movie-container">{renderMovies}</div>
                <PaginationLine />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MoviesList;
