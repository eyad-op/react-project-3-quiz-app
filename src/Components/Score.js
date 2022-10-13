import React from "react";

const Score = ({ score, questions, reset }) => {
  return (
    <div className="score">
      <h2>
        You have scored {score} out of {questions.length}
      </h2>
      <button onClick={reset}>Reset the game</button>
    </div>
  );
};

export default Score;
