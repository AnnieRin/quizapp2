import { useContext } from "react";
import "./App.css";
import { Button } from "./components/Button";
import Dropdowns from "./components/Dropdowns";
import { MainContext } from "./context/mainContext";
import Question from "./components/Question";
import Score from "./components/Score";
import { QuizContext } from "./context/quizContext";

function App() {
  const { startQuiz, started } = useContext(MainContext);
  const { showScore } = useContext(QuizContext);
  return started ? (
    showScore ? (
      <Score />
    ) : (
      <Question />
    )
  ) : (
    <div className="mainContainer">
      <h1>QuizApp</h1>
      <Dropdowns />
      <Button label="Start Quiz" onClick={() => startQuiz()} />
    </div>
  );
}

export default App;
