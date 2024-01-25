import React from "react";
import { QuizContext } from "../context/quizContext";
import { Button } from "./Button";
import { MainContext } from "../context/mainContext";

const Question = () => {
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const { questions } = React.useContext(MainContext);
  const { handleAnswerButtonClick, currentQuestion } =
    React.useContext(QuizContext);

  return (
    <div className="question-container">
      <h2 className="question">{questions[currentQuestion].question.text}</h2>
      <div className="answer-container">
        {[
          questions[currentQuestion].correctAnswer,
          ...questions[currentQuestion].incorrectAnswers,
        ].map((answerOption) => (
          <Button
            variant="answer"
            selected={selectedAnswer === answerOption}
            key={answerOption}
            label={answerOption}
            onClick={() => setSelectedAnswer(answerOption)}
          />
        ))}
      </div>
      <div style={{ marginTop: "5px" }}>
        <Button
          onClick={() => handleAnswerButtonClick(selectedAnswer, questions)}
          label="Next Question"
        />
      </div>
    </div>
  );
};

export default Question;
