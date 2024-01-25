import React, { useEffect } from "react";
import { getQuestions } from "../api/requests";
import PropTypes from "prop-types";
import {
  categoriesConst,
  difficultiesConst,
  numberOfQuestionsConst,
} from "../utils/constants";

export const MainContext = React.createContext();

export const MainProvider = ({ children }) => {
  const [started, setStarted] = React.useState(false);
  const [dateStarted, setDateStarted] = React.useState(new Date());
  const [selectedCategory, setSelectedCategory] = React.useState(
    categoriesConst.music
  );
  const [selectedDifficulty, setSelectedDifficulty] = React.useState(
    difficultiesConst.easy
  );
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] =
    React.useState(numberOfQuestionsConst.ten);
  const [questions, setQuestions] = React.useState([]);

  const startQuiz = async () => {
    const questionsResponse = await getQuestions({
      category: selectedCategory,
      difficulty: selectedDifficulty,
      numberOfQuestions: selectedNumberOfQuestions,
    });
    setQuestions(questionsResponse);
    setStarted(true);
  };

  const resetQuestions = () => {
    setStarted(false);
    setQuestions([]);
  };

  useEffect(() => {
    setDateStarted(new Date());
  }, [questions]);

  return (
    <MainContext.Provider
      value={{
        resetQuestions,
        started,
        dateStarted,
        setDateStarted,
        questions,
        startQuiz,
        selectedCategory,
        setSelectedCategory,
        selectedDifficulty,
        setSelectedDifficulty,
        selectedNumberOfQuestions,
        setSelectedNumberOfQuestions,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
