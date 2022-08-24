import React, { useState } from "react";

// stateless vs stateful
// class DisplayInfo extends React.Component {
//   render() {
//     console.log("call me render");
//     // props => viết tắt properties
//     const { listUser } = this.props;
//     console.log(listUser);
//     return (
//       <>
//         {true && (
//           <div>
//             {listUser.map((user, index) => {
//               return (
//                 <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                   <div>My name is {user.name}</div>
//                   <div>My age is {user.age}</div>
//                   <div>
//                     <button
//                       onClick={() => {
//                         this.props.handleDeleteUser(user.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </>
//     );
//   }
// }
const DisplayInfo = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  return (
    <>
      <div>
        <span
          onClick={() => {
            handleShowHideListUser();
          }}
        >
          {isShowHideListUser === true ? "Hide list user" : "Show list user"}
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
                      props.handleDeleteUser(user.id);
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
