import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: "Какого цвета небо",
        rightAnswerId: 2,
        id: 1,
        answers: [
          { text: "Вопрос 1", id: 1 },
          { text: "Вопрос 1", id: 2 },
          { text: "Вопрос 1", id: 3 },
          { text: "Вопрос 1", id: 4 },
          { text: "Вопрос 1", id: 5 },
          { text: "Вопрос 1", id: 6 },
        ],
      },
      {
        question: "Какого цвета трава",
        rightAnswerId: 2,
        id: 2,
        answers: [
          { text: "Зеленый", id: 1 },
          { text: "Вопрос 1", id: 2 },
          { text: "Вопрос 1", id: 3 },
          { text: "Вопрос 1", id: 4 },
          { text: "Вопрос 1", id: 5 },
          { text: "Вопрос 1", id: 6 },
        ],
      },
    ],
  };

  onAnswerClickHandler = (answerId) => {
    console.log(answerId);

    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: { [answerId]: "success" },
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearInterval(timeout);
      }, 1000);
    } else {
      this.setState({
        answerState: { [answerId]: "error" },
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответье на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state = {this.state.answerState}
          />
        </div>
      </div>
    );
  }
}
export default Quiz;
