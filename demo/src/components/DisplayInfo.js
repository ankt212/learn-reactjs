import React from "react";

class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };
  render() {
    // props => viết tắt properties
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <div>
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list user:"
              : "Show list user:"}
          </span>
        </div>
        {this.state.isShowListUser && (
          <div>
            {listUser.map((user) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                </div>
              );
            })}
          </div>
        )}
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
