import { useEffect, useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPatchPlusFill, BsPatchMinusFill } from "react-icons/bs";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { RiImageAddFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
import {
  getAllQuizForAdmin,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";

const Questions = (props) => {
  //   const options = [
  //     { value: "chocolate", label: "Chocolate" },
  //     { value: "strawberry", label: "Strawberry" },
  //     { value: "vanilla", label: "Vanilla" },
  //   ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  const initQuestion = [
    {
      id: uuidv4(),
      description: "",
      imageFile: "",
      imageName: "",
      answers: [
        {
          id: uuidv4(),
          description: "",
          isCorrect: false,
        },
      ],
    },
  ];
  const [questions, setQuestions] = useState(initQuestion);
  console.log(questions);

  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [dataPreviewImage, setDataPreviewImage] = useState({
    title: "",
    url: "",
  });

  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
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

  const handleAddRemoveQuestion = (type, id) => {
    if (type === "ADD") {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
          },
        ],
      };
      setQuestions([...questions, newQuestion]);
    }

    if (type === "REMOVE") {
      let questionsClone = _.cloneDeep(questions);
      questionsClone = questionsClone.filter((item) => item.id !== id);
      setQuestions(questionsClone);
    }
  };

  const handleAddRemoveAnswer = (type, questionId, answerId) => {
    let questionsClone = _.cloneDeep(questions);
    console.log(questions);
    if (type === "ADD") {
      const newAnswer = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
      };
      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers.push(newAnswer);
      setQuestions(questionsClone);
    }

    if (type === "REMOVE") {
      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers = questionsClone[index].answers.filter(
        (item) => item.id !== answerId
      );
      setQuestions(questionsClone);
    }
  };

  const handleOnChange = (type, questionId, value) => {
    if (type === "QUESTION") {
      let questionsClone = _.cloneDeep(questions);
      let index = questionsClone.findIndex((item) => item.id === questionId);
      if (index > -1) {
        questionsClone[index].description = value;
        setQuestions(questionsClone);
      }
    }
  };

  const handleOnChangeFileQuestions = (questionId, event) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (
      index > -1 &&
      event.target &&
      event.target.files &&
      event.target.files[0]
    ) {
      questionsClone[index].imageFile = event.target.files[0];

      questionsClone[index].imageName = event.target.files[0].name;
      console.log("check file", event.target.files[0].name);
      setQuestions(questionsClone);
    }
  };

  const handleAnswerQuestion = (type, answerId, questionId, value) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (index > -1) {
      questionsClone[index].answers = questionsClone[index].answers.map(
        (answer) => {
          if (answer.id === answerId) {
            if (type === "CHECKBOX") {
              answer.isCorrect = value;
            }
            if (type === "INPUT") {
              answer.description = value;
            }
          }
          return answer;
        }
      );
      setQuestions(questionsClone);
    }
  };

  const handlePreviewImage = (questionId) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (index > -1) {
      setDataPreviewImage({
        url: URL.createObjectURL(questionsClone[index].imageFile),
        title: questionsClone[index].imageName,
      });
      setIsPreviewImage(true);
    }
  };

  const handleSubmitQuestionForQuiz = async () => {
    //  postCreateNewQuestionForQuiz,postCreateNewAnswerForQuestion,
    // validate data
    if (_.isEmpty(selectedQuiz)) {
      toast.error("Please choose a Quiz");
      return;
    }

    // validate answer
    let isValidAnswer = true;
    let indexQ = 0,
      indexA = 0;
    for (let i = 0; i < questions.length; i++) {
      for (let j = 0; j < questions[i].answers.length; j++) {
        if (!questions[i].answers[j].description) {
          isValidAnswer = false;
          indexA = j;
          break;
        }
      }
      indexQ = i;
      if (isValidAnswer === false) break;
    }

    if (isValidAnswer === false) {
      toast.error(`Not empty Answer ${indexA + 1} at Question ${indexQ + 1}`);
      return;
    }

    // validate question
    let isValidQuestion = true;
    let indexQ1 = 0;

    for (let i = 0; i < questions.length; i++) {
      if (!questions[i].description) {
        isValidQuestion = false;
        indexQ1 = i;
        break;
      }
    }
    if (isValidQuestion === false) {
      toast.error(`Not empty description Question ${indexQ1 + 1}`);
      return;
    }
    //submit question
    for (const question of questions) {
      const q = await postCreateNewQuestionForQuiz(
        +selectedQuiz.value,
        question.description,
        question.imageFile
      );
      for (const answer of question.answers) {
        await postCreateNewAnswerForQuestion(
          answer.description,
          answer.isCorrect,
          q.DT.id
        );
      }
    }
    toast.success("Create questions and answers success");
    setQuestions(initQuestion);
  };
  return (
    <div className="questions-container">
      <div className="title">Manage Question</div>
      <hr />
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={listQuiz}
          />
        </div>
        <div>
          <div className="mt-3 mb-2">Add Question</div>
          {questions &&
            questions.length > 0 &&
            questions.map((question, index) => {
              return (
                <div key={question.id} className="q-main mb-4">
                  <div className="mt-1 questions-content">
                    <div className="form-floating description">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        value={question.description}
                        placeholder="Description"
                        onChange={(event) =>
                          handleOnChange(
                            "QUESTION",
                            question.id,
                            event.target.value
                          )
                        }
                      />
                      <label htmlFor="floatingInput">
                        Question {index + 1} 's description
                      </label>
                    </div>
                    <div className="group-upload">
                      <label htmlFor={`${question.id}`}>
                        <RiImageAddFill className="label-up" />
                      </label>
                      <input
                        id={`${question.id}`}
                        type={"file"}
                        onChange={(event) =>
                          handleOnChangeFileQuestions(question.id, event)
                        }
                        hidden
                      />
                      <span>
                        {question.imageName ? (
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => handlePreviewImage(question.id)}
                          >
                            {question.imageName}
                          </span>
                        ) : (
                          "0 file is uploaded"
                        )}
                      </span>
                    </div>
                    <div className="btn-add">
                      <span onClick={() => handleAddRemoveQuestion("ADD", "")}>
                        <BsFillPatchPlusFill className="icon-add" />
                      </span>
                      {questions.length > 1 && (
                        <span
                          onClick={() =>
                            handleAddRemoveQuestion("REMOVE", question.id)
                          }
                        >
                          <BsPatchMinusFill className="icon-remove" />
                        </span>
                      )}
                    </div>

                    {/* <div className="answers">
            <input type={"text"} />
          </div> */}
                  </div>
                  {question.answers &&
                    question.answers.length > 0 &&
                    question.answers.map((answer, index) => {
                      return (
                        <div key={answer.id} className="answers-content">
                          <input
                            className="form-check-input iscorrect"
                            type="checkbox"
                            checked={answer.isCorrect}
                            onChange={(event) =>
                              handleAnswerQuestion(
                                "CHECKBOX",
                                answer.id,
                                question.id,
                                event.target.checked
                              )
                            }
                          />
                          <div className="form-floating answer-name">
                            <input
                              value={answer.description}
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="Answer"
                              onChange={(event) =>
                                handleAnswerQuestion(
                                  "INPUT",
                                  answer.id,
                                  question.id,
                                  event.target.value
                                )
                              }
                            />
                            <label>Answer {index + 1}</label>
                          </div>
                          <div className="btn-group">
                            {/* <button>Add new</button> */}
                            <span>
                              <AiFillPlusCircle
                                onClick={() =>
                                  handleAddRemoveAnswer("ADD", question.id)
                                }
                                className="icon-add"
                              />
                            </span>
                            {question.answers.length > 1 && (
                              <span>
                                <AiOutlineMinusCircle
                                  onClick={() =>
                                    handleAddRemoveAnswer(
                                      "REMOVE",
                                      question.id,
                                      answer.id
                                    )
                                  }
                                  className="icon-remove"
                                />
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          {questions && questions.length > 0 && (
            <div>
              <button
                onClick={() => handleSubmitQuestionForQuiz()}
                className="btn btn-warning"
              >
                Save questions
              </button>
            </div>
          )}
        </div>
      </div>
      {isPreviewImage === true && (
        <Lightbox
          image={dataPreviewImage.url}
          title={dataPreviewImage.title}
          onClose={() => setIsPreviewImage(false)}
        />
      )}
    </div>
  );
};

export default Questions;
