import { useState } from "react";
import "./App.scss";
import Questions from "./data.json";

function App() {
  const questions = Questions.questions;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore((score) => score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      {showScore ? (
        <h1 className="score">
          You have scored {score} out of {questions.length}
        </h1>
      ) : (
        <div className="question">
          <div className="question__body">
            <h2 className="question__number">
              Question {currentQuestion + 1}
              <span>/{questions.length}</span>
            </h2>
            <h1 className="question__text">
              {questions[currentQuestion].questionText}
            </h1>
          </div>
          <div className="question__answers">
            {questions[currentQuestion].answerOptions.map((answer, index) => {
              return (
                <button
                  onClick={() => handleAnswerButtonClick(answer.isCorrect)}
                  key={index}
                  className="question__answer"
                >
                  {answer.answerText}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
