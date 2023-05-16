import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";
import { useParams } from "react-router";

import { clearSingleMovie, getDetails } from "../../feature/movies/moviesSlice";
import { renderLinkWiki } from "../../utils/formatNameActorsFromLink";

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
                <span>Director :</span>
                <span>{singleMovie.Director}</span>
              </div>
              <div>
                <span className="wiki-icon">
                  Stars :
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    imageRendering="optimizeQuality"
                    shapeRendering="geometricPrecision"
                    textRendering="geometricPrecision"
                    viewBox="0 0 512 512"
                    id="wikipedia"
                  >
                    <polygon
                      fill="#1a1a1a"
                      points="256 106 321 143 386 181 386 256 386 331 321 369 256 406 191 369 126 331 126 256 126 181 191 143"
                    ></polygon>
                    <polygon points="256 406 191 369 126 331 126 256 126 181 191 143 256 106"></polygon>
                    <polygon
                      fill="#ffffff"
                      points="256 131 310 162 364 193 364 256 364 319 310 350 256 381 202 350 148 319 148 256 148 193 202 162"
                    ></polygon>
                    <path
                      fill="#000000"
                      d="M293 213c1,1 1,1 2,1 5,1 10,1 7,8 0,2 -1,3 -1,5l-8 19c-5,12 -9,24 -14,36 0,2 0,2 -1,2 0,-1 -2,-3 -2,-4l-7 -15c0,-1 -1,-3 -2,-4l-4 -10c-1,-2 0,-3 1,-4l9 -19c1,-3 5,-11 7,-13 1,0 2,0 3,-1 3,0 2,1 2,-4l-22 0c0,6 0,3 5,5 3,1 1,5 0,7 0,2 -1,3 -1,4 -2,3 -7,14 -8,16l0 -1c-1,-1 -1,-1 -1,-2 -2,-5 -10,-20 -10,-22 0,-3 5,-2 5,-4l0 -3 -24 0c0,3 -1,4 3,4 3,1 5,4 6,7l13 28c0,1 2,6 2,6 0,1 -6,13 -6,15l-6 12c0,1 -1,1 -1,2 -1,0 -1,0 -1,-1l-21 -49c0,-2 -6,-15 -6,-17 0,-4 8,-2 10,-3 0,-2 0,-2 0,-4 0,0 -1,0 -1,0l-30 0c-1,0 -1,0 -1,1l0 2c0,2 6,1 8,4 2,2 3,6 4,8l5 13c1,2 1,3 2,4l22 52c2,7 5,13 10,3 2,-3 3,-5 4,-8 0,-1 1,-1 1,-2 0,-1 1,-1 1,-2l2 -4c1,-4 7,-15 7,-17l1 0c0,3 3,7 4,10 2,6 8,19 10,25 5,9 9,-3 11,-7l19 -49c2,-3 8,-20 10,-24 4,-6 11,-4 11,-6l0 -3c-3,0 -28,-1 -29,0 -1,1 0,2 0,3z"
                    ></path>
                  </svg>
                </span>
                {renderLinkWiki(singleMovie?.Actors)}
              </div>
              <div>
                <span>Genres :</span>
                <span>{singleMovie.Genre}</span>
              </div>
              <div>
                <span>Languages :</span>
                <span>{singleMovie.Language}</span>
              </div>
              <div>
                <span>Awards :</span>
                <span>{singleMovie.Awards}</span>
              </div>
              <div>
                <span>Writer :</span>
                <span>{singleMovie.Writer}</span>
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
