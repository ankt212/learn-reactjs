import "./TableQuiz.scss";
import { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);

  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({});

  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [dataDelete, setDataDelete] = useState({});

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    await getAllQuizForAdmin()
      .then((res) => {
        if (res && res.EC === 0) {
          setListQuiz(res.DT);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickBtnUpdate = (quiz) => {
    setShowModalUpdateQuiz(true);
    setDataUpdate(quiz);
  };

  const handleClickBtnDelete = (quiz) => {
    setShowModalDeleteUser(true);
    setDataDelete(quiz);
  };
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td scope="row">{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "5px" }}>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleClickBtnUpdate(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleClickBtnDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchQuiz={fetchQuiz}
      />
      <ModalDeleteQuiz
        show={showModalDeleteUser}
        setShow={setShowModalDeleteUser}
        dataDelete={dataDelete}
        fetchQuiz={fetchQuiz}
        // fetchListUsers={fetchListUsers}
      />
    </>
  );
};

export default TableQuiz;
