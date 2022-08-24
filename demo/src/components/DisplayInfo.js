import React, { useEffect, useState } from "react";

// stateless vs stateful
const DisplayInfo = (props) => {
  const { listUser } = props;

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  console.log(">>> call me render");
  useEffect(() => {
    if (listUser.length === 0) {
      alert("You delete all users");
    }
    console.log(">>> call me useEffect");
  }, [listUser]);
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
