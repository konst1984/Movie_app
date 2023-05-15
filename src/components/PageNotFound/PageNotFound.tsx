import React from "react";

import pnf from "images/pnf.jpg";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <div className="wrapper">
      <img src={pnf} alt="404" />
    </div>
  );
};

export default PageNotFound;
