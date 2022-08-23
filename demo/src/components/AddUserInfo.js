import React from "react";

class AddUserInfo extends React.Component {
  //jsx
  constructor(props) {
    super(props);
    this.state = {
      name: "An Peter",
      address: "Hà Đông",
      age: 23,
    };

    this.handleOnChangeInput = (event) => {
      this.setState({
        name: event.target.value,
      });
      console.log(event, event.target.value);
    };

    this.handleOnChangeAge = (event) => {
      this.setState({
        age: event.target.value,
      });
    };

    this.handleOnChangeAddrress = (event) => {
      this.setState({
        address: event.target.value,
      });
    };

    this.handleOnSubmit = (event) => {
      event.preventDefault();
      console.log(this.state);
      this.props.handleAddNewUser({
        id: Math.floor(Math.random() * 100 + 1) + "-random",
        name: this.state.name,
        age: this.state.age,
      });
    };
  }
  render() {
    return (
      <>
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
          <label>Your age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          />
          <br />
          <button>Submit</button>
        </form>
      </>
    );
  }
}

export default AddUserInfo;
