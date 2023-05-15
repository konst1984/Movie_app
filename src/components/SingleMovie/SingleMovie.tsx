import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { useParams } from "react-router";

import { clearSingleMovie, getDetails } from "../../feature/movies/moviesSlice";

import { Preloader } from "../Preloader";
import { PageNotFound } from "../PageNotFound";
import { ErrorPage } from "../ErrorPage";

import NoImg from "../../images/not_found.jpg";
import "./SingleMovie.scss";

const SingleMovie = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { singleMovie, loading, error } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getDetails(id));
    return () => {
      dispatch(clearSingleMovie());
    };
  }, [id, dispatch]);

  if (singleMovie.Response === "False") {
    return <PageNotFound />;
  }

  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <div className="movie-section">
          <div className="section-left">
            <div className="movie-title">{singleMovie.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> :{" "}
                {singleMovie.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {singleMovie.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {singleMovie.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {singleMovie.Year}
              </span>
            </div>
            <div className="movie-plot">{singleMovie.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{singleMovie.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{singleMovie.Actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{singleMovie.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{singleMovie.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{singleMovie.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={
                singleMovie.Poster === "N/A" ? `${NoImg}` : singleMovie.Poster
              }
              alt={singleMovie.Title}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMovie;
