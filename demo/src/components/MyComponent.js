// class component
// function component
import React from "react";

class MyComponent extends React.Component {
  //jsx
  state = {
    name: "An Peter",
    address: "Hà Đông",
    age: 23,
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.address}
      </div>
    );
  }
}
export default MyComponent;
