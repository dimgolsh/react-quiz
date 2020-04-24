import React from "react";
import classes from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios-quiz";
import Loader from "../../components/UI/Loader/Loader";
import { connect } from "react-redux";
import { fetchQuizById } from "../../store/actions/quiz";

class Quiz extends React.Component {
  state = {
    results: {},
    activeQuestion: 0,
    isFinished: false,
    answerState: null,
    quiz: [],
    loading: true,
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
      if (!results[question.id]) {
        results[question.id] = "success";
      }
      this.setState({
        answerState: { [answerId]: "success" },
        results,
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
      results[question.id] = "error";
      this.setState({
        answerState: { [answerId]: "error" },
        results: results,
      });
    }
  };

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: [],
    });
  };

  componentDidMount() {
    console.log('propos', this.props);
    this.props.fetchQuizById(this.props.match.params.id);
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    console.log(this.props);
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответье на все вопросы</h1>
          {this.props.loading ? (
            <Loader />
          ) : this.props.isFinished ? (
            <FinishedQuiz
              results={this.props.results}
              quiz={this.props.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.props.quiz[this.props.activeQuestion].answers}
              question={this.props.quiz[this.props.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLenght={this.props.quiz.length}
              answerNumber={this.props.activeQuestion + 1}
              state={this.props.answerState}
            />
          )}

          {}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state',state);
  return {
    loading: state.quiz.loading,
    activeQuestion: state.quiz.activeQuestion,
    isFinished: state.quiz.isFinished,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    results: state.quiz.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: id => dispatch(fetchQuizById(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
