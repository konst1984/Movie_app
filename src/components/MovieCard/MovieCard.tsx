import React from "react";
import { Link } from "react-router-dom";

import NoImg from "../../images/not_found.jpg";
import "./MovieCard.scss";
import { IMovieShort } from "../../types";

const MovieCard = (props: { data: IMovieShort }) => {
  const { data } = props;

  return (
    <div className="card-item">
      <Link to={`/movie_app/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img
              src={data.Poster === "N/A" ? `${NoImg}` : data.Poster}
              alt={data.Title}
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>Release: {data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
