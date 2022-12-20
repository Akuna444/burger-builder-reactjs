import React from "react";
import classes from "./Spinner.module.css";

const spinner = () => (
  <div className={classes.Loader}>
    <div className="loader">Loading...</div>
  </div>
);

export default spinner;
