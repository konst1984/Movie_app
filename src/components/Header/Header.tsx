import React from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hook";

import { resetError } from "../../feature/movies/moviesSlice";

import User from "images/user.png";
import "./Header.scss";

const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <div className="container header_container">
        <Link to="/movie_app" onClick={() => dispatch(resetError())}>
          <div className="logo">Movie App</div>
        </Link>
        <div className="user-image">
          <img src={User} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Header;
