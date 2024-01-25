import axios from "axios";
import { routePaths } from "../utils/constants";

export const getQuestions = async (params) => {
  const body = {
    categories: params.category,
    difficulty: params.difficulty,
    numberOfQuestions: params.numberOfQuestions,
  };
  const response = await axios.get(
    `${routePaths.BASE_API_URL}${routePaths.QUESTIONS}`,
    { params: body }
  );
  return response.data;
};
