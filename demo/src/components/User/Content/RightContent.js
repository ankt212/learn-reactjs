import CountDown from "./CountDown";
import { useRef } from "react";

const RightContent = (props) => {
  const refDiv = useRef([]);
  const { dataQuiz } = props;
  const onTimeUp = () => {
    props.handleFinishQuiz();
  };

  const getClassQuestion = (question) => {
    if (question && question.answers.length > 0) {
      let isUnAnswered = question.answers.find((a) => a.isSelected === true);
      if (isUnAnswered) {
        return "question selected";
      }
    }
    return "question";
  };

  const handleClickQuestion = (question, index) => {
    props.setIndex(index);
    if (refDiv.current) {
      refDiv.current.forEach((item) => {
        if (item && item.className === "question clicked") {
          item.className = "question";
        }
      });
    }
    if (question && question.answers.length > 0) {
      let isUnAnswered = question.answers.find((a) => a.isSelected === true);
      if (isUnAnswered) {
        return;
      }
    }

    refDiv.current[index].className = "question clicked";
  };
  return (
    <>
      <div className="main-timer">
        <CountDown onTimeUp={onTimeUp} />
      </div>
      <div className="main-question">
        {dataQuiz &&
          dataQuiz.length > 0 &&
          dataQuiz.map((item, index) => {
            return (
              <div
                key={`question-${index}`}
                onClick={() => handleClickQuestion(item, index)}
                className={getClassQuestion(item)}
                ref={(el) => (refDiv.current[index] = el)}
              >
                {index + 1}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default RightContent;
