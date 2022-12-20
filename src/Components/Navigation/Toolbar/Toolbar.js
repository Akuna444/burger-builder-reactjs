import React from "react";
import classes from "../Toolbar/Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToggleDrawer from "../ToggleDrawer/ToggleDrawer";

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <ToggleDrawer clicked={props.toggleDrawer} />
    <div className={classes.Logo}>
      <Logo />
    </div>

    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
