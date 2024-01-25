import { useContext } from "react";
import { QuizContext } from "../context/quizContext";
import { MainContext } from "../context/mainContext";
import { Button } from "./Button";

const Score = () => {
  const { score, resetCurrentQuiz } = useContext(QuizContext);
  const { dateStarted, resetQuestions } = useContext(MainContext);

  const handleTryAgain = () => {
    resetQuestions();
    resetCurrentQuiz();
  };

  return (
    <div className="score">
      <p>Score: {score}</p>
      <p>
        Time elapsed in second: {Math.floor((Date.now() - dateStarted) / 1000)}
      </p>
      <Button label="Try Again" onClick={handleTryAgain} />
    </div>
  );
};

export default Score;
