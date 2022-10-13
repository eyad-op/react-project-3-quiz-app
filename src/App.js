import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="question">
        <div className="question__body">
          <h1 className="question__number">
            Question 1<span>/4</span>
          </h1>
          <h2 className="question__text">What is the capital of France</h2>
        </div>
        <div className="question__answers">
          <button className="question__answer">New York</button>
          <button className="question__answer">London</button>
          <button className="question__answer">Paris</button>
          <button className="question__answer">Dublin</button>
        </div>
      </div>
    </div>
  );
}

export default App;
