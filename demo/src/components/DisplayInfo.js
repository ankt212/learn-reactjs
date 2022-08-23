import React, { useState } from "react";

// stateless vs stateful
// class DisplayInfo extends React.Component {
// render() {
//   console.log("call me render");
//   // props => viết tắt properties
//   const { listUser } = this.props;
//   console.log(listUser);
//   return (
//     <>
//       {true && (
//         <div>
//           {listUser.map((user, index) => {
//             return (
//               <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                 <div>My name is {user.name}</div>
//                 <div>My age is {user.age}</div>
//                 <div>
//                   <button
//                     onClick={() => {
//                       this.props.handleDeleteUser(user.id);
//                     }}
//                   >
//                     Delete
//                   </button>
//                 </div>
//                 <hr />
//               </div>
//             );
//           })}
//         </div>
//       )}
//       {/* <div>My name is {listUser.name}</div>
//       <div>My age is {listUser.age}</div>
//       <hr />
//       <div>My name is {listUser.name}</div>
//       <div>My age is {listUser.age}</div>
//       <hr />
//       <div>My name is {listUser.name}</div>
//       <div>My age is {listUser.age}</div>
//       <hr /> */}
//     </>
//   );
// }
// }

const DisplayInfo = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHide = () => {
    // alert("Click me");
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <>
      <div>
        <span onClick={() => handleShowHide()}>
          {isShowHideListUser == true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
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
    </>
  );
};

export default DisplayInfo;
