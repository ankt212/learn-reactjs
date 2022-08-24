// class component
// function component
import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listUser: [
//         { id: 1, name: "An Peter", age: "14" },
//         { id: 2, name: "Minh Hương", age: "21" },
//         { id: 3, name: "Quang Long", age: "96" },
//       ],
//     };

//     this.handleAddNewUser = (userObj) => {
//       console.log("Check data ", userObj);
//       this.setState({
//         listUser: [userObj, ...this.state.listUser],
//       });
//       // let listUserClone = [...this.state.listUser];
//     };

//     this.handleDeleteUser = (userId) => {
//       // console.log(userId);
//       let listUsersClone = this.state.listUser;
//       listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//       this.setState({
//         listUser: listUsersClone,
//       });
//     };
//   }

//   render() {
//     return (
//       <>
//         <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
//         <br />
//         <br />
//         <DisplayInfo
//           listUser={this.state.listUser}
//           handleDeleteUser={this.handleDeleteUser}
//         />
//       </>
//     );
//   }
// }
const MyComponent = (props) => {
  const [listUser, setListUser] = useState([
    { id: 1, name: "An Peter", age: "14" },
    { id: 2, name: "Minh Hương", age: "21" },
    { id: 3, name: "Quang Long", age: "96" },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUser([userObj, ...listUser]);
  };

  const handleDeleteUser = (userId) => {
    // console.log(userId);
    let listUsersClone = listUser;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    // this.setState({
    //   listUser: listUsersClone,
    // });
    setListUser(listUsersClone);
  };
  return (
    <div>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
