import React from "react";
import classes from "../ToggleDrawer/ToggleDrawer.module.css";

const toggleDrawer = (props) => (
  <div onClick={props.clicked} className={classes.ToggleDrawer}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggleDrawer;
