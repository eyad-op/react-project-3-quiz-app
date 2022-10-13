import { useState } from "react";
import Questions from "./data.json";
import Answers from "./Components/Answers";
import Score from "./Components/Score";
import "./App.scss";

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

  const handleResetGame = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  return (
    <div className="container">
      {showScore ? (
        <Score score={score} questions={questions} reset={handleResetGame} />
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
          <Answers
            questions={questions}
            currentQuestion={currentQuestion}
            choose={handleAnswerButtonClick}
          />
        </div>
      )}
    </div>
  );
}

export default App;
