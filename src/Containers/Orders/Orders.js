import React, { Component } from "react";
import Order from "../../Components/Order/Order";
import axios from "../../axios-orders";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler";

class Orders extends Component {
  state = {
    loading: true,
    Orders: [],
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        const fetchedOrders = [];

        for (let key in response.data) {
          fetchedOrders.push({
            ...response.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, Orders: fetchedOrders });
      })
      .catch(() =>
        this.setState({
          loading: false,
        })
      );
  }
  render() {
    let content = this.state.Orders.map((order) => (
      <Order
        price={+order.price}
        ingredients={order.ingredients}
        key={order.id}
        loading={this.state.loading}
      />
    ));
    if (this.state.loading) {
      content = <Spinner />;
    }
    return <div>{content}</div>;
  }
}

export default withErrorHandler(Orders, axios);
