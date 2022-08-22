// class component
// function component
import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfo from "./UserInfo";

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="An Peter" age="23" />
        <hr />
        <DisplayInfo name="Ronaldo" age="37" />
      </div>
    );
  }
}
export default MyComponent;
