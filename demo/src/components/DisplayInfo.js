import React from "react";

class DisplayInfo extends React.Component {
  constructor(props) {
    console.log("call constructor");
    super(props);
    this.state = {
      isShowListUser: true,
    };
    this.handleShowHide = () => {
      this.setState({
        isShowListUser: !this.state.isShowListUser,
      });
    };
  }

  componentDidMount() {
    console.log("call me component did mount");
    setTimeout(() => {
      document.title = "AnPeter";
    }, 3000);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("call me component did update", this.props, prevProps);
    if (this.props.listUser !== prevProps.listUser) {
      if (this.props.listUser.length === 5) {
        alert("you got 5 user");
      }
    }
  }
  componentWillUnmount() {}

  render() {
    console.log("call me render");
    // props => viết tắt properties
    const { listUser } = this.props;
    console.log(listUser);
    return (
      <>
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
            {listUser.map((user, index) => {
              return (
                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => {
                        this.props.handleDeleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
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
      </>
    );
  }
}

export default DisplayInfo;
