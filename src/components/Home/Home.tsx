import React  from "react";

import {MoviesList} from "../MoviesList";
import {SearchField} from "../SearchField";


const Home = () => {

  return (
    <>
      <SearchField/>
      <MoviesList />
    </>
  );
};

export default Home;
