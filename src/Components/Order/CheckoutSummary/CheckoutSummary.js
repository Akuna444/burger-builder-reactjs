import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => (
  <div className={classes.CheckoutSummary}>
    <h1>We hope it tastes Well!</h1>
    <div
      style={{
        width: "100%",
        margin: "auto",
      }}
    >
      <Burger ingredients={props.ingredients} />
    </div>
    <Button clicked={props.continuedHandler} btnType="Success">
      Continue
    </Button>
    <Button clicked={props.cancelledHandler} btnType="Danger">
      Cancel
    </Button>
  </div>
);

export default checkoutSummary;
