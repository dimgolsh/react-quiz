import React from "react";
import css from "./FinishedQuiz.module.css";

const FinishedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
      if(props.results[key] === 'success'){
          total++
      }
      return total;
  }, 0);
  return (
    <div className={css.FinishedQuiz}>
      <ul>
        {props.quiz.map((quiz, index) => {
          const cls = [
            "fa",
            props.results[quiz.id] === "error" ? "ee " : "eee",
            css[props.results[quiz.id]],
          ];
          return (
            <li key={index}>
              <strong>
                {index + 1}
                {quiz.question}
                <p className={cls.join(" ")}></p>
              </strong>
            </li>
          );
        })}
      </ul>
      <strong>{successCount} из {props.quiz.length} </strong>
      <button onClick={props.onRetry}>Reset</button>
    </div>
  );
};

export default FinishedQuiz;
