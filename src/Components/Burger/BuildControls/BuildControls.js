import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "../BuildControls/BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>
      Current Price:<strong> {props.price.toFixed(2)} </strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.addedIngredients(ctrl.type)}
        removed={() => props.removedIngredients(ctrl.type)}
        disabled={props.disabledInfo[ctrl.type]}
      />
    ))}
    <button  onClick={props.ordered} disabled={!props.purchasable} className={classes.OrderButton}>
      ORDER NOW
    </button>
  </div>
);

export default buildControls;
