import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо',
        rightAnswerId: 2,
        answers: [
          { text: "Вопрос 1" , id: 1},
          { text: "Вопрос 1" , id: 2},
          { text: "Вопрос 1" , id: 3},
          { text: "Вопрос 1" , id: 4},
          { text: "Вопрос 1" , id: 5},
          { text: "Вопрос 1" , id: 6},
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log(answerId);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответье на все вопросы</h1>
          <ActiveQuiz 
          answers={ this.state.quiz[0].answers } 
          question={ this.state.quiz[0].question } 
          onAnswerClick = {this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
