import React, { Component } from "react";
import AddNumber from "../Components/AddNumber";
import store from "../store";

export default class AddNumberContainer extends Component {
  render() {
    return (
      <AddNumber
        onClick={(size) => {
          store.dispatch({ type: "INCREMENT", size: size });
        }}
      ></AddNumber>
    );
  }
}
