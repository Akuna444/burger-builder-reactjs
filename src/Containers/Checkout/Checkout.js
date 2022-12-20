/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { Route } from "react-router";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      meat: 1,
      cheese: 1,
      bacon: 1,
    },
  };

  continuedHandler = () => {
    this.props.history.replace(this.props.match.path + "/contact-data");
  };

  cancelledHandler = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          continuedHandler={this.continuedHandler}
          cancelledHandler={this.cancelledHandler}
          ingredients={this.state.ingredients}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData ingredients={this.state.ingredients} {...props} />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
