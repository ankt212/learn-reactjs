import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   //jsx
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "An Peter",
//       address: "Hà Đông",
//       age: 23,
//     };

//     this.handleOnChangeInput = (event) => {
//       this.setState({
//         name: event.target.value,
//       });
//       console.log(event, event.target.value);
//     };

//     this.handleOnChangeAge = (event) => {
//       this.setState({
//         age: event.target.value,
//       });
//     };

//     this.handleOnChangeAddrress = (event) => {
//       this.setState({
//         address: event.target.value,
//       });
//     };

//     this.handleOnSubmit = (event) => {
//       event.preventDefault();
//       console.log(this.state);
//       this.props.handleAddNewUser({
//         id: Math.floor(Math.random() * 100 + 1) + "-random",
//         name: this.state.name,
//         age: this.state.age,
//       });
//     };
//   }
//   render() {
//     return (
//       <>
//         My name is {this.state.name} and I'm form {this.state.address}
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <label>Your name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => {
//               this.handleOnChangeInput(event);
//             }}
//           />
//           <br />
//           <label>Your age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           />
//           <br />
//           <button>Submit</button>
//         </form>
//       </>
//     );
//   }
// }
const AddUserInfo = (props) => {
  // const [infoUser, setInfoUser] = useState({
  //   name: "An Peter",
  //   address: "Hà Đông",
  //   age: 23,
  // });
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnChangeAddrress = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  return (
    <>
      My name is {name} and I'm {age}
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Your name:</label>
        <input
          value={name}
          type="text"
          onChange={(event) => {
            handleOnChangeInput(event);
          }}
        />
        <br />
        <label>Your age:</label>
        <input
          value={age}
          type="text"
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};
export default AddUserInfo;
