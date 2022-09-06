import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";

import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../../services/apiServices";
const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const handleShowHideModal = (value) => {
    setShowModalCreateUser(value);
  };

  const [listUsers, setListUsers] = useState([]);
  useEffect(() => {
    fetchListUsers();
  }, []);
  const fetchListUsers = async () => {
    let response = await getAllUsers();
    if (response.EC === 0) {
      setListUsers(response.DT);
    }
  };
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          // setShow={setShowModalCreateUser}
          setShow={handleShowHideModal}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;
