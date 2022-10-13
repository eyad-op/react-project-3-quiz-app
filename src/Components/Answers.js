import React from "react";

const Answers = ({ questions, currentQuestion, choose }) => {
  return (
    <div className="question__answers">
      {questions[currentQuestion].answerOptions.map((answer, index) => {
        return (
          <button
            onClick={() => choose(answer.isCorrect)}
            key={index}
            className="question__answer"
          >
            {answer.answerText}
          </button>
        );
      })}
    </div>
  );
};

export default Answers;
