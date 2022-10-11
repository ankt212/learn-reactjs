import { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

const Questions = (props) => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});
  return (
    <div className="questions-container">
      <div className="title">Manage Question</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div>
          <div className="mt-3">Add Question</div>
          <div className="mt-1 questions-content">
            <div className="form-floating description">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="Description"
              />
              <label htmlFor="floatingInput">Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type={"file"} hidden />
              <span>0 file is uploaded</span>
            </div>
            <div className="btn-add">
              {/* <button>Add new</button> */}
              <span>
                <BsFillPatchPlusFill className="icon-add" />
              </span>
              <span>
                <BsPatchMinusFill className="icon-remove" />
              </span>
            </div>

            {/* <div className="answers">
            <input type={"text"} />
          </div> */}
          </div>
          <div className="answers-content">
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Answer"
              />
              <label>Answer 1</label>
            </div>
            <div className="btn-group">
              {/* <button>Add new</button> */}
              <span>
                <AiFillPlusCircle className="icon-add" />
              </span>
              <span>
                <AiOutlineMinusCircle className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
