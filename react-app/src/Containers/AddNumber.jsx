import { connect } from "react-redux";
import AddNumber from "../Components/AddNumber";

function mapDispatchToProps(dispatch) {
  return {
    onClick: (size) => {
      dispatch({ type: "INCREMENT", size: size });
    },
  };
}

export default connect(null, mapDispatchToProps)(AddNumber);

// import React, { Component } from "react";
// import store from "../store";

// export default class AddNumberContainer extends Component {
//   render() {
//     return (
//       <AddNumber
//         onClick={(size) => {
//           store.dispatch({ type: "INCREMENT", size: size });
//         }}
//       ></AddNumber>
//     );
//   }
// }
