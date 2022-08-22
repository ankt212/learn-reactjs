import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // props => viết tắt properties
    const { name, age } = this.props;
    return (
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
