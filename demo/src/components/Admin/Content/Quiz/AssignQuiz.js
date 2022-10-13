import Select from "react-select";
import { useEffect, useState } from "react";
import "./AssignQuiz.scss";
import {
  getAllQuizForAdmin,
  getAllUsers,
} from "../../../../services/apiServices";

const AssignQuiz = (props) => {
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [listQuiz, setListQuiz] = useState([]);

  const [selectedUser, setSelectedUser] = useState({});
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    fetchQuiz();
    fetchUser();
  }, []);

  const fetchQuiz = async () => {
    await getAllQuizForAdmin()
      .then((res) => {
        if (res && res.EC === 0) {
          let newQuiz = res.DT.map((item) => {
            return {
              value: item.id,
              label: `${item.id} - ${item.description}`,
            };
          });
          setListQuiz(newQuiz);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUser = async () => {
    await getAllUsers()
      .then((res) => {
        if (res && res.EC === 0) {
          let users = res.DT.map((item) => {
            return {
              value: item.id,
              label: `${item.id} - ${item.username} - ${item.email}`,
            };
          });
          setListUser(users);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="assign-quiz-container row">
      <div className="col-6 form-group">
        <label className="mb-2">Select Quiz</label>
        <Select
          defaultValue={selectedQuiz}
          onChange={setSelectedQuiz}
          options={listQuiz}
        />
      </div>

      <div className="col-6 form-group">
        <label className="mb-2">Select Quiz</label>
        <Select
          defaultValue={selectedUser}
          onChange={setSelectedUser}
          options={listUser}
        />
      </div>

      <div>
        <button className="btn btn-warning mt-3">Assign</button>
      </div>
    </div>
  );
};

export default AssignQuiz;
