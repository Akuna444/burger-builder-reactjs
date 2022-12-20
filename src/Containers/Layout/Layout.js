import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import classes from "./Layout.module.css";
import Toolbar from "../../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  closeSideDrawerHandler = () => {
    this.setState({
      showSideDrawer: false,
    });
  };

  toggleSideDrawerHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar toggleDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.closeSideDrawerHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
