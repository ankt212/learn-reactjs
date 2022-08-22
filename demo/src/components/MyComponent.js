// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "An Peter", age: "14" },
      { id: 2, name: "Minh Hương", age: "21" },
      { id: 3, name: "Quang Long", age: "96" },
    ],
  };

  handleAddNewUser = (userObj) => {
    console.log("Check data ", userObj);
    this.setState({
      listUser: [userObj, ...this.state.listUser],
    });
    // let listUserClone = [...this.state.listUser];
  };

  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}
export default MyComponent;
