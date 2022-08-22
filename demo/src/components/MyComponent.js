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

  handleClick() {
    console.log("Click me");
    // console.log(event);
    console.log("My name is ", this.state.name);
  }

  handleOnMouseOver(event) {
    console.log(event.pageX);
  }
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.address}
        <br />
        <button onClick={this.handleClick}>Click me</button>
        <button onMouseOver={this.handleOnMouseOver}>Hover me</button>
      </div>
    );
  }
}
export default MyComponent;
