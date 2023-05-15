import React from "react";
import { Pagination } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hook";

import { setCurrentPage } from "../../feature/movies/moviesSlice";

import "./PaginationLine.scss";

const PaginationLine = () => {
  const dispatch = useAppDispatch();
  const { totalResults, currentPage } = useAppSelector((state) => state.movies);

  const onChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <Pagination
      current={currentPage}
      onChange={onChange}
      total={totalResults}
      showQuickJumper
      showTotal={(total: number) => `Total ${total} items`}
    />
  );
};

export default PaginationLine;
