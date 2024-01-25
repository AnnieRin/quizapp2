import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MainProvider } from "./context/mainContext";
import { QuizProvider } from "./context/quizContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <QuizProvider>
        <App />
      </QuizProvider>
    </MainProvider>
  </React.StrictMode>
);
