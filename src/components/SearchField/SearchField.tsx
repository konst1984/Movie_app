import React, { useState } from "react";
import { Input, Radio, RadioChangeEvent } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";

import {
  setCategoryMovies,
  setCurrentPage,
  setSearchText,
} from "../../feature/movies/moviesSlice";

import "./Search.scss";

const { Search } = Input;

const SearchField = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useAppDispatch();
  const { categoryMovies } = useAppSelector(({ movies }) => movies);

  const chooseCategoryMovies = (e: RadioChangeEvent) => {
    dispatch(setCategoryMovies(e.target.value));
    dispatch(setCurrentPage(1));
  };

  const searchMovies = () => {
    dispatch(setSearchText(value));
    setValue("");
  };

  return (
    <div className="input-field ">
      <Search
        placeholder="input search text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSearch={searchMovies}
        enterButton
      />
      <div>
        <Radio.Group defaultValue={categoryMovies} buttonStyle="solid">
          <Radio.Button value="all" onChange={chooseCategoryMovies}>
            All
          </Radio.Button>
          <Radio.Button value="movie" onChange={chooseCategoryMovies}>
            Movies
          </Radio.Button>
          <Radio.Button value="series" onChange={chooseCategoryMovies}>
            Series
          </Radio.Button>
        </Radio.Group>
      </div>
    </div>
  );
};

export default SearchField;
