import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import {
  categoriesConst,
  difficultiesConst,
  numberOfQuestionsConst,
} from "../utils/constants";

const Dropdowns = () => {
  const { setSelectedCategory, selectedCategory } = useContext(MainContext);
  return (
    <>
      <div className="select-input">
        <label htmlFor="category">Category:</label>
        <select
          name="category"
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          {Object.entries(categoriesConst).map(([key, value]) => (
            <option key={value} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="select-input">
        <label htmlFor="difficulty">Difficulty:</label>
        <select name="difficulty" id="difficulty">
          {Object.entries(difficultiesConst).map(([key, value]) => (
            <option key={value} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="select-input">
        <label htmlFor="questionsCount">Number of questions:</label>
        <select name="questionsCount" id="questionsCount">
          {Object.values(numberOfQuestionsConst).map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdowns;
