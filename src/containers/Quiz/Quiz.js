import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";


class Quiz extends React.Component {
  state = {
    results: {},
    activeQuestion: 0,
    isFinished: false,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];
      if (this.state.answerState[key] === "success") {
        return;
      }
    }

    console.log(answerId);

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {

      if(!results[question.id]) {
        results[question.id]='success'
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results
      });
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }
        window.clearInterval(timeout);
      }, 1000);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: "error" },
        results: results
      });
    }
  };

  retryHandler = () => {
    this.setState({
      activeQuestion:0,
      answerState: null,
      isFinished: false,
      results: []
    })
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответье на все вопросы</h1>
          {this.state.isFinished ? (
           <FinishedQuiz
           results = {this.state.results}
           quiz={this.state.quiz}
           onRetry={this.retryHandler}
           />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLenght={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}
export default Quiz;
