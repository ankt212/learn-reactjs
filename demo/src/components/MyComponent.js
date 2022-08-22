// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  state = {
    listUser: [
      { id: 1, name: "An Peter", age: "23" },
      { id: 2, name: "Minh Hương", age: "21" },
      { id: 3, name: "Quang Long", age: "22" },
    ],
  };
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUser={this.state.listUser} />
      </div>
    );
  }
}
export default MyComponent;
