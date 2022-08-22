import React from "react";

class UserInfo extends React.Component {
  //jsx
  state = {
    name: "An Peter",
    address: "Hà Đông",
    age: 23,
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
    console.log(event, event.target.value);
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnChangeAddrress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm form {this.state.address}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          />
          <br />
          <label>Your address:</label>
          <input
            value={this.state.address}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAddrress(event);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfo;
