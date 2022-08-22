import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // props => viết tắt properties
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        {listUser.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
            </div>
          );
        })}
        {/* <div>My name is {listUser.name}</div>
        <div>My age is {listUser.age}</div>
        <hr />
        <div>My name is {listUser.name}</div>
        <div>My age is {listUser.age}</div>
        <hr />
        <div>My name is {listUser.name}</div>
        <div>My age is {listUser.age}</div>
        <hr /> */}
      </div>
    );
  }
}

export default DisplayInfo;
