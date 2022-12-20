import React from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.entries(props.ingredients).map((igEntry) => {
    return (
      <li>
        <span>{igEntry[0].toUpperCase()}: </span>
        <strong>{igEntry[1]}</strong>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delcious burger with the following Ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <strong>Total Price: {props.price.toFixed(2)}</strong>
      <p>Countinue to Check out ?</p>
      <div style={{ display: "flex" }}>
        <Button clicked={props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </div>
    </Aux>
  );
};

export default orderSummary;
